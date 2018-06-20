import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Image } from "react-konva";

class MemeImage extends React.Component {
    
    state = {
      image: null
    };

    componentDidMount() {
      const image = new window.Image();
      image.src = 'img/cheese.jpeg';
      image.onload = () => {
        // setState will redraw layer
        // because "image" property is changed
       
        this.setState({
          image: image
        });
      };
    }
  
    render() {
      return <Image image={this.state.image} draggable = {true} />;
    }
  }

  export default MemeImage;