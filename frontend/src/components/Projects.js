import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import context from "../assets/img/project-card/context.png";
import erpcrm from "../assets/img/project-card/erpcrm.png";
import algorithms from "../assets/img/project-card/algorithms.png";
import assembly from "../assets/img/project-card/assembly.png";
import oop from "../assets/img/project-card/oop.png";
import compilers from "../assets/img/project-card/compilers.png";
import operating from "../assets/img/project-card/operating.png";
import graphic from "../assets/img/project-card/graphic.png";
import ai from "../assets/img/project-card/ai.png";
import spring from "../assets/img/project-card/spring.png";
import uelgo from "../assets/img/project-card/uelgo.png";
import vmm from "../assets/img/project-card/vmm.png";
import tcc from "../assets/img/project-card/tcc.png";
import eda from "../assets/img/project-card/eda.png";
import rafalift from "../assets/img/project-card/rafalift.png";
import latex from "../assets/img/project-card/latex.png";
import apirest from "../assets/img/project-card/apirest.png";
import speedtest from "../assets/img/project-card/speedtest.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCarousel } from "./ProjectCarousel";

export const Projects = () => {
    const projects = [
    {
      title: "ERP e CRM",
      description: "Sistemas ERP e CRM sob medida, eficiência operacional, modelagem de dados, relatórios, automação de processos e aderência às regras fiscais brasileiras.",
      imgUrl: erpcrm,
      category: "professional",
      stack: "PHP, Adianti, MySQL, JavaScript, Git, Kanban",
    },
    {
      title: "ContExt",
      description: "Processamento de imagens para extração de contornos e geração de malhas esparsas ou adaptativas em métodos numéricos como diferenças finitas.",
      imgUrl: context,
      category: "research",
      stack: "Python, OpenCV, Pandas, NumPy",
      githubUrl: "https://github.com/RafaelCasamaximo/contExt",
    },
    {
      title: "LaTeX para HTML",
      description: "Ferramenta para conversão automática de documentos LaTeX em HTML, preservando estrutura, formatação e elementos matemáticos.",
      imgUrl: latex,
      category: "research",
      stack: "Python",
      githubUrl: "https://github.com/rafatokairin/tex2html",
    },
    {
      title: "Aplicativo de Academia e Dieta",
      description: "Aplicativo de treino e dieta com agendamento semanal, controle de exercícios, cálculo de GCD e acompanhamento nutricional por meio de barras de progresso.",
      imgUrl: rafalift,
      category: "research",
      stack: "Java, Dart, Flutter, Nuxt.js",
      githubUrl: "https://github.com/rafatokairin/RafaLift",
    },
    {
      title: "Análise Exploratória de Mamografias",
      description: "Análise exploratória de dados aplicada a imagens de mamografias",
      imgUrl: eda,
      category: "research",
      stack: "Python",
      githubUrl: "https://github.com/rafatokairin/EdaDdsmMias",
    },
    {
      title: "Criação de Dados Sintéticos e Impactos em CNN",
      description: "Geração de dados sintéticos e seus impactos no desempenho de redes neurais convolucionais em tarefas de classificação.",
      imgUrl: tcc,
      category: "research",
      stack: "Python",
      githubUrl: "https://github.com/rafatokairin/TCC",
    },
    {
      title: "Algoritmos e Estrutura de Dados",
      description: "Grafos, árvores, listas e algoritmos clássicos",
      imgUrl: algorithms,
      category: "academic",
      stack: "C",
      githubUrl: "https://github.com/rafatokairin/AlgorithmsAndDataStructures",
    },
    {
      title: "Assembly (MIPS)",
      description: "Vetores, listas ligadas e procedimentos em MIPS",
      imgUrl: assembly,
      category: "academic",
      stack: "Assembly (MIPS)",
      githubUrl: "https://github.com/rafatokairin/Assembly",
    },
    {
      title: "Programação Orientada a Objetos",
      description: "Herança, polimorfismo, exceções e design patterns",
      imgUrl: oop,
      category: "academic",
      stack: "Java",
      githubUrl: "https://github.com/rafatokairin/ObjectOrientedProgramming",
    },
    {
      title: "Compiladores",
      description: "Análise léxica, sintática, semântica e alocação de registradores.",
      imgUrl: compilers,
      category: "academic",
      stack: "C, C++, Flex, Bison",
      githubUrl: "https://github.com/rafatokairin/Compilers",
    },
    {
      title: "Sistemas Operacionais e Distribuídos",
      description: "Processos, threads, sincronização, comunicação e sistemas distribuídos.",
      imgUrl: operating,
      category: "academic",
      stack: "C, Python, Threads, Sockets, RPC",
      githubUrl: "https://github.com/rafatokairin/OperatingSystemsAndDistributed",
    },
    {
      title: "Computação Gráfica e Processamento de Imagens",
      description: "Modelagem 3D, renderização, manipulação de imagens e classificação de objetos.",
      imgUrl: graphic,
      category: "academic",
      stack: "C, Python, OpenGL, OpenCV",
      githubUrl: "https://github.com/rafatokairin/ImageProcessingAndGraphics",
    },
    {
      title: "Speed Test",
      description: "Simulação de testes de rede TCP e UDP com métricas de download, upload, pacotes e análise de pacotes via Wireshark, desenvolvido em Python.",
      imgUrl: speedtest,
      category: "academic",
      stack: "Python, TCP, UDP, Wireshark",
      githubUrl: "https://github.com/rafatokairin/SpeedTest",
    },
    {
      title: "Inteligência Artificial",
      description: "Classificação de dados, análise exploratória e resolução de problemas usando algoritmos inteligentes.",
      imgUrl: ai,
      category: "academic",
      stack: "Python, scikit-learn, NumPy, Pandas, Matplotlib",
      githubUrl: "https://github.com/rafatokairin/ArtificialIntelligence",
    },
    {
      title: "UEL Go",
      description: "Mapa interativo da UEL mostrando cantinas, salas e locais importantes, com backend em Rust e frontend em React.",
      imgUrl: uelgo,
      category: "academic",
      stack: "Rust, React, Node.js, Git, Kanban, PERT, Gantt",
      githubUrl: "https://github.com/rafatokairin/UELGo",
    },
    {
      title: "Simulador de Gerenciamento de Memória Virtual",
      description: "Simula a tradução de endereços lógicos para físicos, utilizando TLB e tabela de páginas.",
      imgUrl: vmm,
      category: "academic",
      stack: "C++",
      githubUrl: "https://github.com/rafatokairin/VirtualMemoryManager",
    },
    {
      title: "Wine API",
      description: "API REST de gerenciamento de vinhos usando Spring Boot, com CRUDs, DAO, DTO, JDBC e queries SQL, testada com Postman.",
      imgUrl: apirest,
      category: "academic",
      stack: "Java, Spring Boot, JDBC, DAO, DTO, PostgreSQL, Postman",
      githubUrl: "https://github.com/rafatokairin/WineAPI",
    },
    {
      title: "Spring Boot e React Native",
      description: "CRUDs, sessões, interfaces de admin e usuário, e aplicativos móveis com interação do usuário e navegação.",
      imgUrl: spring,
      category: "academic",
      stack: "Java, Spring Boot, React Native, Node.js, SQLite, Expo",
      githubUrl: "https://github.com/rafatokairin/SpringBootAndReactNative",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>
                    Conjunto de projetos desenvolvidos a partir de experiências profissionais,
                    pesquisas científicas e da minha formação acadêmica, envolvendo engenharia
                    de software, ciência de dados, inteligência artificial e sistemas computacionais.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center">
                      <Nav.Item><Nav.Link eventKey="first">Profissional</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="second">Pesquisa</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">Acadêmico</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <ProjectCarousel projects={projects.filter(p => p.category === "professional")} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <ProjectCarousel projects={projects.filter(p => p.category === "research")} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <ProjectCarousel projects={projects.filter(p => p.category === "academic")} />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
