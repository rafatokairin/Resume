import php from "../assets/img/skills/php.svg";
import java from "../assets/img/skills/java.svg";
import python from "../assets/img/skills/python.svg";
import cpp from "../assets/img/skills/cpp.svg";
import typescript from "../assets/img/skills/typescript.svg";
import javascript from "../assets/img/skills/javascript.svg";
import dart from "../assets/img/skills/dart.svg";
import adianti from "../assets/img/skills/adianti.svg";
import spring from "../assets/img/skills/spring.svg";
import vuejs from "../assets/img/skills/vuejs.svg";
import nuxtjs from "../assets/img/skills/nuxtjs.svg";
import reactjs from "../assets/img/skills/reactjs.svg";
import flutter from "../assets/img/skills/flutter.svg";
import oracle from "../assets/img/skills/oracle.svg";
import postgresql from "../assets/img/skills/postgresql.svg";
import mysql from "../assets/img/skills/mysql.svg";
import linux from "../assets/img/skills/linux.svg";
import git from "../assets/img/skills/git.svg";
import postman from "../assets/img/skills/postman.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experiência</h2>

              <p>
                Experiência em PHP, Java, Python, C/C++, TypeScript, JavaScript e Dart, bancos de dados Oracle, PostgreSQL e MySQL, ambientes Linux, Git e Postman, além de frameworks como Adianti, Spring, Vue.js, Nuxt.js, React e Flutter.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={php} alt="PHP" />
                  <h5>PHP</h5>
                </div>

                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>

                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <img src={cpp} alt="C e C++" />
                  <h5>C/C++</h5>
                </div>

                <div className="item">
                  <img src={typescript} alt="TypeScript" />
                  <h5>TypeScript</h5>
                </div>

                <div className="item">
                  <img src={javascript} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <img src={dart} alt="Dart" />
                  <h5>Dart</h5>
                </div>

                <div className="item">
                  <img src={oracle} alt="Oracle" />
                  <h5>Oracle</h5>
                </div>

                <div className="item">
                  <img src={postgresql} alt="PostgreSQL" />
                  <h5>PostgreSQL</h5>
                </div>

                <div className="item">
                  <img src={mysql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>

                <div className="item">
                  <img src={linux} alt="Linux" />
                  <h5>Linux</h5>
                </div>

                <div className="item">
                  <img src={git} alt="Git" />
                  <h5>Git</h5>
                </div>

                <div className="item">
                  <img src={postman} alt="Postman" />
                  <h5>Postman</h5>
                </div>

                <div className="item">
                  <img src={adianti} alt="Adianti Framework" />
                  <h5>Adianti</h5>
                </div>

                <div className="item">
                  <img src={spring} alt="Spring Framework" />
                  <h5>Spring</h5>
                </div>

                <div className="item">
                  <img src={vuejs} alt="Vue.js" />
                  <h5>Vue.js</h5>
                </div>

                <div className="item">
                  <img src={nuxtjs} alt="Nuxt.js" />
                  <h5>Nuxt.js</h5>
                </div>

                <div className="item">
                  <img src={reactjs} alt="React Native" />
                  <h5>React Native</h5>
                </div>

                <div className="item">
                  <img src={flutter} alt="Flutter" />
                  <h5>Flutter</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
