export const ProjectCard = ({ title, description, imgUrl, stack, githubUrl }) => {
  const stackArray = typeof stack === 'string' 
    ? stack.split(',').map(item => item.trim()).filter(item => item !== '')
    : Array.isArray(stack) ? stack : [];
  
  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-card-link">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="tech-stack-wrapper">
            <div className="tech-stack-grid">
              {stackArray.map((tech, index) => (
                <div key={index} className="tech-stack-pill">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};