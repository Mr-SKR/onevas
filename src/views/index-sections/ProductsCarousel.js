import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require("assets/img/camping/product-carousel-1.webp"),
    altText: 'Camping Tents',
    header: 'Camping Tents',
    caption: 'Starting from \u20B9 200/day'
  },
  {
    src: require("assets/img/camping/product-carousel-2.webp"),
    altText: 'Sleeping Bags',
    header: 'Sleeping Bags',
    caption: 'Starting from \u20B9 50/day'
  },
  {
    src: require("assets/img/camping/product-carousel-3.webp"),
    altText: 'Sleeping mats',
    header: 'Sleeping mats',
    caption: 'Coming soon'
  }
];

const ProductsCarousel = () => {
    return (
        <div id="carousel">
            <UncontrolledCarousel className="productCarousel" items={items}/>
        </div>
        
    );
}

export default ProductsCarousel;
