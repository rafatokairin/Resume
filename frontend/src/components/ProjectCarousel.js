import { Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-bootstrap/Carousel";

export const ProjectCarousel = ({ projects, projectsPerSlide = 6 }) => {
  // divide projetos em blocos de 6 (3x2)
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkArray(projects, projectsPerSlide);
  const showArrows = slides.length > 1;

  return (
    <div className="project-slider">
      <Carousel interval={null} indicators={false} controls={showArrows}>
        {slides.map((slide, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row>
              {slide.map((project, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                  <ProjectCard {...project} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
