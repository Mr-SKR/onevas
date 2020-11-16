/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <h3 className="motto text-center">
              Our motto is to provide quality, hygiene and nature-friendly camping equipments
            </h3>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/img/founders/arunraj-kodoth.webp")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">ArunRaj Kodoth</CardTitle>
                      <h6 className="card-category">Co-Founder</h6>
                      <p style={{color: "white"}}>Order & Delivery management</p>
                    </div>
                    <p className="card-description text-center">
                      I am a computer science graduate and an environmentalist contributing to make this world a better place to live
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://twitter.com/arunraj_kodoth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/arunraj-kodoth-716a71153/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/img/founders/moniesh-ram.webp")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Moniesh Ram</CardTitle>
                      <h6 className="card-category">Co-Founder</h6>
                      <p style={{color: "white"}}>Design & Marketing</p>
                    </div>
                    <p className="card-description text-center">
                      I am an information science graduate and a film critic by hobby
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://twitter.com/moniesh_ram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/__abhay__/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/moniesh-ram/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/img/founders/suresh-reddy.webp")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Suresh Reddy</CardTitle>
                      <h6 className="card-category">Co-Founder</h6>
                      <p style={{color: "white"}}>Technology</p>
                    </div>
                    <p className="card-description text-center">
                      I am an information science engineer, a techie who understands binary language to bridge machines and humans
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://twitter.com/Suresh_K_Reddy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/suresh.kumar.reddy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/suresh-kumar-reddy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      <div className="section landing-section" id="contact_us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Got a query?</h2>
                <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="https://wa.me/917483006036" target="_blank" rel="noopener noreferrer">
                      <img
                        alt="..."
                        src={require("assets/img/whatsapp-logo.webp")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">WhatsApp</CardTitle>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="tel:+917483006036" target="_blank" rel="noopener noreferrer">
                      <img
                        alt="..."
                        src={require("assets/img/telephone-logo.webp")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Phone</CardTitle>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}

export default SectionTypography;
