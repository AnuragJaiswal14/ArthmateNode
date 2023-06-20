import { Container, Nav, Row, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";

export const Projects = () =>{
    const projects = [
        {
            title: "Prarbdha Soni",
            description:"SDE-2",
            imgUrl: projImg1,
        },
        {
            title: "Shivani Gupta",
            description:"SDE2",
            imgUrl: projImg2,
        },
        {
            title: "Gopi Karteek",
            description:"SDE1",
            imgUrl: projImg3,
        }
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col >
                      <h2>Team </h2>
                      <p>Members as per groups</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tech</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Business</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Product</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>{
                                projects.map((project,index)=>{
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
                          <Tab.Pane eventKey="second"> Lorem Ipsum</Tab.Pane>
                          <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>

    )
}