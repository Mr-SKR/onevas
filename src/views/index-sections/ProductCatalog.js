import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function ProductCatalog() {
  return (
    <>
      <div className="section section-dark text-center">
        <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our inventory</h2>
              <p className="description">
                Prices are subjected to change. Please contact us to enquire about product availability* 
              </p>
            </Col>
          </Row>
          <Row className="example-page">
          <Col className="text-center" md="4">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/products/quechua-fresh-black.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.decathlon.in/p/8357355/tents/camping-tent-arpenaz-freshblack-3-person"
                target="_blank"
              >
               <h1 style={{fontSize: "12px", textTransform: "uppercase", fontWeight: "600", textAlign: "center", verticalAlign: "middle", margin: "0"}}>Quechua 3 person tent - &#8377; 250/day *</h1>
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/products/quechua-fresh-black.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.decathlon.in/p/8357354/tents/camping-tent-arpenaz-freshblack-2-person"
                target="_blank"
              >
               <h1 style={{fontSize: "12px", textTransform: "uppercase", fontWeight: "600", textAlign: "center", verticalAlign: "middle", margin: "0"}}>Quechua 2 person tent - &#8377; 200/day *</h1>
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/products/quechua-sleeping-bag-10.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.decathlon.in/p/8513489/sleeping-bag-and-mattress/camping-sleeping-bag-arpenaz-10c"
                target="_blank"
              >
               <h1 style={{fontSize: "12px", textTransform: "uppercase", fontWeight: "600", textAlign: "center", verticalAlign: "middle", margin: "0"}}>Quechua Sleeping bag - &#8377; 60/day *</h1>
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/products/quechua-sleeping-bag-15.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.decathlon.in/p/8558891/sleeping-bag-and-mattress/camping-sleeping-bag-arpenaz-15"
                target="_blank"
              >
               <h1 style={{fontSize: "12px", textTransform: "uppercase", fontWeight: "600", textAlign: "center", verticalAlign: "middle", margin: "0"}}>Quechua Sleeping bag - &#8377; 50/day *</h1>
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/products/quechua-air-pillow.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://www.decathlon.in/p/8055369/sleeping-bag-and-mattress/inflatable-camping-pillow-air-basic"
                target="_blank"
              >
               <h1 style={{fontSize: "12px", textTransform: "uppercase", fontWeight: "600", textAlign: "center", verticalAlign: "middle", margin: "0"}}>Quechua Air Pillow - &#8377; 15/day *</h1>
              </Button>
            </Col>
            <Col className="text-center" md="4">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/products/sleeping-mattress.webp")}
                style={{ width: "100%" }}
              />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="#"
                target="_blank"
              >
               <h1 style={{fontSize: "12px", textTransform: "uppercase", fontWeight: "600", textAlign: "center", verticalAlign: "middle", margin: "0"}}>Sleeping mattress - Coming soon</h1>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductCatalog;
