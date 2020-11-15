import React from "react";

// core components
import ProductNavbar from "components/Navbars/ProductNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FloatingButton from "components/FloatingButton.js";

import ProductsCarousel from "views/index-sections/ProductsCarousel.js";
import ProductCatalog from "views/index-sections/ProductCatalog.js";

function Products() {
    return (
        <div>
            <FloatingButton />
            <ProductNavbar />
            <ProductsCarousel />
            <ProductCatalog />
            <DemoFooter />
        </div>
    );
}

export default Products;
