import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import logo from './logo.svg';
import './App.css';
import  Canvas from './Canvas.js'
import Emoji from './Emoji';

const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={1279} children={children}/>;

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstCaption : 'สีหน้าของคุณ',
            secondCaption : 'เมื่อเพื่อนขิงเรื่องเทียเต้อ',
            save : false,
        };
        this.onFirstCaptionChange =  this.onFirstCaptionChange.bind(this);
        this.onSecondCaptionChange = this.onSecondCaptionChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSaved = this.onSaved.bind(this);
    }
    onFirstCaptionChange (evt) {
        this.setState({firstCaption : evt.target.value});
    }
    onSecondCaptionChange (evt) {
        this.setState({secondCaption : evt.target.value});
    }
    onClick(){
        this.setState({save : true});
    }
    onSaved(){
        this.setState({save : false});
    }

    render () {
        return( 
            <div className = 'MainPage'>
                <div className = 'container'>
                    <h1>MEME-JANE-RATOR</h1> 
                        <Desktop>
                            <div className = 'row'>
                                <div className = 'col-md-6 '>
                                    <Canvas firstCaption = {this.state.firstCaption} secondCaption = {this.state.secondCaption} save = {this.state.save} onSaved = {this.onSaved} />
                                </div>

                                <div className = "col-md-4 ">
                                    <h2>Caption</h2> 
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="สีหน้าของคุณเมื่อ" onChange = {this.onFirstCaptionChange}></input>
                                    </div>

                                    <h2>Caption 2</h2> 
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="เพื่อนขิงเรื่องเทียเต้อ"  onChange = {this.onSecondCaptionChange}></input>
                                    </div>
                                    <button type="button" className="btn btn-success" onClick = {this.onClick}>Generate MEME</button>
                                </div>
                            </div>
                        </Desktop>
                        <Mobile>

                            <Canvas firstCaption = {this.state.firstCaption} secondCaption = {this.state.secondCaption} save = {this.state.save} onSaved = {this.onSaved} />
                            <div className = 'mobile-padding'>
                            <h2>Caption</h2> 
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="สีหน้าของคุณเมื่อ" onChange = {this.onFirstCaptionChange}></input>
                                </div>

                                <h2>Caption 2</h2> 
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="เพื่อนขิงเรื่องเทียเต้อ"  onChange = {this.onSecondCaptionChange}></input>
                                </div>
                            <button type="button" className="btn btn-success" onClick = {this.onClick}>Generate MEME</button>
                            </div>
                        </Mobile>
                </div>
                <footer className = 'footer'>
                <div className = 'col-lg-12'> 
                    Made with <Emoji symbol = '❤️' /> by @supasonk
                </div>
            </footer>


            </div>
        )
    }
}

export default MainPage;