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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FloatingButton from "components/FloatingButton.js"

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
//import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
//import SectionDark from "views/index-sections/SectionDark.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionExample1 from "views/index-sections/SectionExample1.js";
import SectionExample2 from "views/index-sections/SectionExample2.js";
import SectionNavigation from 'views/index-sections/SectionNavigation.js'

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <FloatingButton />
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionNavigation />
        <SectionCarousel />
        <SectionExample1 />
        <SectionExample2 />
      </div>
      <SectionTypography />
      <DemoFooter />
    </>
  );
}

export default Index;
