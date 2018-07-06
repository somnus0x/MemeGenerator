import React, { Component } from "react";
import MediaQuery from "react-responsive";
import ReactGA from 'react-ga';
import Config from 'Config'
import "./App.css";
import Canvas from "./Canvas.js";
import Emoji from "./Emoji";

const Desktop = ({ children }) => (
  <MediaQuery minWidth={1280} children={children} />
);
const Mobile = ({ children }) => (
  <MediaQuery maxWidth={1279} children={children} />
);

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCaption: "",
      secondCaption: "",
      firstCaptionPlaceholder : "",
      secondCaptionPlaceholder : "",
      GAInit : false,
    };

    this.canvasRef = React.createRef();
    this.mobileCanvasRef = React.createRef();

    if (!this.state.GAInit ){
      ReactGA.initialize(Config.google_analytics_tracking_id);
      ReactGA.pageview(window.location.pathname + window.location.search);
      this.setState({GAInit : true});
    }


   

  }
  onFirstCaptionChange = (evt) => {
    this.setState({ firstCaption: evt.target.value });
  }
  onSecondCaptionChange = (evt) => {
    this.setState({ secondCaption: evt.target.value });
  }
  componentDidMount() {
    this.setState({
      firstCaption: "สีหน้าของคุณ",
      secondCaption: "เมื่อเพื่อนขิงเรื่องเทียเต้อ",
      firstCaptionPlaceholder : "สีหน้าของคุณ",
      secondCaptionPlaceholder : "เมื่อเพื่อนขิงเรื่องเทียเต้อ",
    });
  }
  onMobileTouch = () => {
    this.mobileCanvasRef.current.captureCanvas();
    ReactGA.event({
      category: 'Mobile User',
      action: 'Generate MEME'
    })
  }

  onClick = () => {
    this.canvasRef.current.captureCanvas();
    ReactGA.event({
      category: 'User',
      action: 'Generate MEME'
    })
  };

  onFirstCaptionInputFocus = () => {
    this.setState({
      firstCaptionPlaceholder : ""
    })
  }

  onSecondCaptionInputFocus = () => {
    this.setState({
      secondCaptionPlaceholder : ""
    })
  }

  

  render() {
    return (
      <div className="MainPage">
        <div className="container">
          <h1>MEME-JANE-RATOR</h1>
          <Desktop>
            <div className="row">
              <div className="col-md-6 ">
                <Canvas
                  ref={this.canvasRef}
                  firstCaption={this.state.firstCaption}
                  secondCaption={this.state.secondCaption}
                />
              </div>

              <div className="col-md-4 ">
                <h2>Caption</h2>
                <Input
                  placeholder={this.state.firstCaptionPlaceholder}
                  
                  onChange={this.onFirstCaptionChange}
                  onFocus = {this.onFirstCaptionInputFocus}
                />

                <h2>Caption 2</h2>
                <Input
                  placeholder={this.state.secondCaptionPlaceholder}
                  onChange={this.onSecondCaptionChange}
                  onFocus = {this.onSecondCaptionInputFocus}
                />
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onClick}
                >
                  Generate MEME
                </button>
              </div>
            </div>
           
          </Desktop>
          
        </div>
        <footer className = 'footer'>
          <div className = 'col-lg-12'> 
              Made with <Emoji symbol = '❤️' /> by @supasonk
          </div>
      </footer>
        <Mobile>
         <div className = 'mobile-container'>
          <Canvas
            ref={this.mobileCanvasRef}
            firstCaption={this.state.firstCaption}
            secondCaption={this.state.secondCaption}
          />
          <div className="mobile-padding">
            <h2>Caption</h2>
            <Input
              placeholder={this.state.firstCaptionPlaceholder}
              onChange={this.onFirstCaptionChange}
              onFocus = {this.onFirstCaptionInputFocus}
            />
            <h2>Caption 2</h2>
            <Input
              placeholder={this.state.secondCaptionPlaceholder}
              onChange={this.onSecondCaptionChange}
              onFocus = {this.onSecondCaptionInputFocus}
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={this.onMobileTouch}
            >
              Generate MEME
            </button>
          </div>
          </div>
        </Mobile>

      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          onFocus = {this.props.onFocus}
        />
      </div>
    );
  }
}

export default MainPage;
