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

function SectionExample2() {
  return (
    <>
      <div className="section section-dark text-center">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/examples/gokarna.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.budgetwayfarers.com/gokarna-beach-karnataka/"
                target="_blank"
              >
               Gokarna
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/examples/tadiandamol.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="http://www.kotresh.com/index.php/tadiandamol-trek"
                target="_blank"
              >
               Tadiandamol
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionExample2;
