import React, { Component } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import './Canvas.css';
const font =  '40px Impact';
const align = "center";
const fontColor = 'white';
const outlineColor = 'black';
const lineWidth = 5;
const shadowBlur = 5;

class Canvas extends React.Component {
    
  state = {
      image: null,
      upperCaption : null,
      lowerCaption : null,
    };

    constructor(props){
      super(props);

      
    }

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
      var image = new window.Image();
      image.src = 'img/cheese.jpeg';
      console.log(image.width/2)
      return(
        <Stage width={image.width} height={image.height}>
          <Layer>
            <Image image={this.state.image} />
            <Text  fontFamily = {'monomon'} 
                    y = {20} 
                    width = {image.width}
                    height = {image.height}
                    draggable = {true} 
                    fontSize = {40}
                    fill = {'white'} 
                    stroke = {'black'}
                    strokeWidth = {1}
                    align='center'
                    wrap = 'char'
                    text="สีหน้าของคุณเมื่อ" 
            />
            <Text  fontFamily = {'monomon'} 
                    y = {400} 
                    width = {image.width}
                    height = {image.height}
                    draggable = {true} 
                    fontSize = {40}
                    fill = {'white'} 
                    stroke = {'black'}
                    strokeWidth = {1}
                    align='center'
                    wrap = 'char'
                    text="สีหน้าของคุณเมื่อ" 
            />
            
          </Layer>
        </Stage>
      )
    }
  }
  export default Canvas