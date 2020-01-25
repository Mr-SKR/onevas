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
  Row,
  Col,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function SectionNavigation() {
  return (
    <>
      <div className="section section-image" id="navbar"
      style={{
        backgroundImage: "url(" + require("assets/img/background-images/section-background-2.webp") + ")"
      }}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="inventory-title">Our inventory</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Navbar className="bg-danger" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Tent</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     2 Person: &#8377; 150/day
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                     4 Person: &#8377; 200/day
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                     5 Person: &#8377; 250/day
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="navbar-transparent pt-0" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Sleeping bag</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     &#8377; 50/day
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="bg-info" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Floor Mat</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     Coming Soon
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="navbar-transparent pt-0" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Power Bank</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     Coming Soon
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="bg-success" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Camp Light</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     Coming Soon
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="navbar-transparent pt-0" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Trekking Bag</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     Coming Soon
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="bg-warning" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Rain Coat</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     Coming Soon
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          <Navbar className="navbar-transparent pt-0" expand="lg">
            <Container>
              <NavbarBrand>
                <h1 className="inventory-item">Onevas Complimentary Kit</h1>
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                     TBA
                    </NavLink>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
          </Container>
        </div>
    </>
  );
}

export default SectionNavigation;
