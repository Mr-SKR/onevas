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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/background-images/antoine-barres.webp") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h2 className="presentation-title">Onevas</h2>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.webp")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.webp")} />
              </div>
            </div>
            <h1 className="presentation-subtitle text-center">
              Rent camping equipments. Hassle-free!
            </h1>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.webp") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
