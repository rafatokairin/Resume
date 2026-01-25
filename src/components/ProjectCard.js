export const ProjectCard = ({ title, description, imgUrl, stack, githubUrl }) => {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card-link"
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <span><b>Tech Stack:</b> {stack}</span>
        </div>
      </div>
    </a>
  );
};