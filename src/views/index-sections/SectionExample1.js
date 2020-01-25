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
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExample1() {
  return (
    <>
      <div className="section section-image"
      style={{
        backgroundImage: "url(" + require("assets/img/background-images/camp-background-1.webp") + ")"
      }}>
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Recommended Camping Places</h2>
              <p className="description">
                We have hand-picked a few camping places around Bengaluru for you.
              </p>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/examples/kumara-parvatha.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.treebo.com/blog/kumara-parvatha-trek/"
                target="_blank"
              >
                Kumara Parvatha
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/examples/gandikota.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://traveltriangle.com/blog/guide-to-gandikota-fort-grand-canyon-of-india/"
                target="_blank"
              >
                Gandikota
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionExample1;
