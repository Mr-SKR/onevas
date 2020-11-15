import React, { Component } from 'react';
import { Container } from "reactstrap";
 
class SimpleMap extends Component {
 
  render() {
    return (
        <div className="section text-center">
        <Container>
        <div className="mapWrapper">
        <iframe
            title="onevas"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.953469910588!2d77.7456741!3d12.9405714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3cc888d87b4a578!2sCALKIN!5e0!3m2!1sen!2sin!4v1605437872262!5m2!1sen!2sin"
            
        />
        </div>
        
        </Container>
        </div>
        
    );
  }
}
 
export default SimpleMap;
