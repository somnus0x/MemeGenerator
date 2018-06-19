import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import './Canvas.css';
const font =  '40px Impact';
const align = "center";
const fontColor = 'white';
const outlineColor = 'black';
const lineWidth = 5;
const shadowBlur = 5;

class Canvas extends React.Component {
    
    constructor(props){
      super(props);

      this.onClick =  this.onClick.bind(this);
    }

    onClick(){
      const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 640, 425);
        var image = new Image();
      image.src = "img/cheese.jpeg"      
      image.onload = () => this.drawImage(ctx,image);

    }

    drawImage = (ctx,image) => {
        ctx.drawImage(image, 0, 0)
        ctx.font = font;
        ctx.textAlign = align;
        ctx.strokeStyle = outlineColor;
        ctx.lineWidth = lineWidth;
        ctx.shadowBlur = shadowBlur;
        ctx.strokeText(this.props.text, image.width/2, 75);
        ctx.fillStyle = fontColor;
        
        ctx.fillText(this.props.text, image.width/2, 75);
    }
    componentDidMount() {
      // const canvas = this.refs.canvas
      // const ctx = canvas.getContext("2d")
      // var image = new Image();
      // image.src = "img/cheese.jpeg"      
      // image.onload = () => this.drawImage(ctx,image);

    }
    
    render() {
      return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text  fontFamily = {'Impact'} text="Try click on rect" />
          
        </Layer>
      </Stage>
      )
    }
  }
  export default Canvas