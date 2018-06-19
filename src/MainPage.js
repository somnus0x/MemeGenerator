import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Canvas from './Canvas.js'

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstCaption : '',
            secondCaption : '',
        };
        this.onChange =  this.onChange.bind(this);
    }
    onChange () {
        this.setState({firstCaption : "Change"});
        console.log(this.state.firstCaption); 
    }
    render () {
        return( 
            <div className = 'MainPage'>
                <h1>MEMEGENERATOR</h1> 
                <div className = 'row'>
                    <div className = 'col-md-6'>
                        <Canvas text = {'Your Face When ....'}/>
                    </div>
                    <div className = "col-md-4">
                        <h1>Caption</h1> 
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange = {this.onChange}></input>
                        </div>

                        <h1>Caption 2</h1> 
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}

export default MainPage;