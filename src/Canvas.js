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
      image.src = 'img/memeTemplate.png';
      image.onload = () => {
        this.setState({
          image: image
        });
      };

    }

    componentDidUpdate() {
      if(this.props.save == true){
          // this.download(this.stageRef.getStage().toDataURL(),'meme.png','image/png').then(function(file){
          //   console.log(file);
          // })
          this.saveBase64AsFile(this.stageRef.getStage().toDataURL(), 'meme.png')
          // console.log(this.stageRef.getStage().toDataURL());
          this.props.onSaved();
      }
    }

    saveBase64AsFile(base64, fileName) {

      var link = document.createElement("a");
  
      link.setAttribute("href", base64);
      link.setAttribute("download", fileName);
      link.click();
  }

    
    
    render() {
      var image = new window.Image();
      image.src = 'img/memeTemplate.png';
      console.log(this.props.save); 
      return(
        <Stage width={image.width} height={image.height} ref={node => { this.stageRef = node}}>
          <Layer>
            <Image image={this.state.image}  />
            <Text  fontFamily = {'Kanit'} 
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
            <Text  fontFamily = {'Kanit'} 
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