require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: `Portfólio <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      reply_to: email,
      subject: "Novo contato pelo portfólio",
      html: `
        <h3>Novo contato</h3>
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ code: 200, message: "Mensagem enviada" });
  } catch (error) {
    console.error("Erro Resend:", error);
    res.status(500).json({ code: 500, message: "Erro ao enviar email" });
  }
});