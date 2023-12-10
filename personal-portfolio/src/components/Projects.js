import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from '../assets/img/eebo.png';
import projImg2 from '../assets/img/signlang.png';
import projImg3 from '../assets/img/blendify.png';

export const Projects = () => {

  const projects = [
    {
      title: "EEBO",
      description: "Online Marketplace with Google maps integration. HTML/CSS/JS/Firebase/API",
      imgUrl: projImg1,
      linkTo: "https://eebo-c2acf.web.app/",
    },
    {
      title: "Blendify",
      description: "Song recommendations Webapp for DJ's built on spotify API.",
      imgUrl: projImg3,
      linkTo: "https://github.com/connorsavage/Blendify/",
    },
    {
      title: "Live Sign Language Recognition",
      description: "Computer vision ML project using python/scikit-learn/tensorflow/opencv/mediapipe",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            
              <div className="">
                <h2>Projects</h2>
                <p>Short collection of some of my projects. Click on any project to see it in action.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className="">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
