import React, { Component } from 'react';

class Canvas extends React.Component {
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      var image = new Image();
      image.src = "img/cheese.jpeg"
      
      image.onload = () => {
        ctx.drawImage(image, 0, 0)
        ctx.font = "40px Impact"
        
         
        ctx.textAlign = "center"
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.shadowBlur = 5;
        ctx.strokeText(this.props.text, image.width/2, 75);
        ctx.fillStyle = "white";
        
        ctx.fillText(this.props.text, image.width/2, 75);
      }
    }
    
    render() {
      return(
        <div>
            <h1>MEMEGENERATOR </h1>
            <div className = 'row'>
              <div className = 'col-md-6'>
                <canvas ref="canvas" width={640} height={425} />
                <div style={{fontFamily : "Impact"}}>.</div>
              </div>
              <div className = "col-md-4">
              <h1>Caption</h1> 
              <div class="input-group mb-3">
                <div className="input-group-prepend">
                  
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>

              <h1>Caption 2</h1> 
              <div class="input-group mb-3">
                <div className="input-group-prepend">
                  
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
              </div>
            </div>
        </div>
      )
    }
  }
  export default Canvas