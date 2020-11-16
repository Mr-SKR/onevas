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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1231448251406!2d77.74535100543474!3d12.940301307932936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d06d623d157%3A0x2a992864bfb0c99c!2sOnevas!5e0!3m2!1sen!2sin!4v1605518584351!5m2!1sen!2sin"
        />
        </div>
        
        </Container>
        </div>
        
    );
  }
}
 
export default SimpleMap;
