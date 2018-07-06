import React, { Component } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import './Canvas.css';


class Canvas extends React.Component {
    
  state = {
      image: null,
      upperCaption : null,
      lowerCaption : null,
    };

    constructor(props){
      super(props);
    }

    componentDidMount = () => {
      const image = new window.Image();
      image.src = 'img/memeTemplate.png';
      image.onload = () => {
        this.setState({
          image: image
        });
      };

    }


    captureCanvas = () =>{
      var base64 = this.stageRef.getStage().toDataURL();
      var link = document.createElement("a");
      link.setAttribute('href', base64);
      link.setAttribute('download','meme.png');
      link.click();
    }
    
    render = () => {
      var image = new window.Image();
      image.src = 'img/memeTemplate.png';
      return(
        <Stage width={image.width} height={image.height} ref={node => { this.stageRef = node}}>
          <Layer>
            <Image image={this.state.image}  />
            <Text  fontFamily = {'Prompt'} 
                    y = {20} 
                    width = {image.width}
                    height = {image.height}
                    fontSize = {40}
                    fill = {'white'} 
                    stroke = {'black'}
                    strokeWidth = {1}
                    align='center'
                    wrap = 'char'
                    text= {this.props.firstCaption}
            />
            <Text  fontFamily = {'Prompt'} 
                    y = {400} 
                    width = {image.width}
                    height = {image.height}

                    fontSize = {35}
                    fill = {'white'} 
                    stroke = {'black'}
                    strokeWidth = {1}
                    align='center'
                    wrap = 'char'
                    text={this.props.secondCaption} 
            />
            
          </Layer>
        </Stage>
      )
    }
  }
  export default Canvas