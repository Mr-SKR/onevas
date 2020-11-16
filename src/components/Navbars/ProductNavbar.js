import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";

function ProductNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");


  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            title="Onevas"
          >
            <div style={{color: "black", textShadow: "1px 1px white"}}>HOME</div>
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

export default ProductNavbar;
