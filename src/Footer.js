import React, { Component } from "react";
import Emoji from "./Emoji";


class Footer extends React.Component {
    render = () => {

      return (
        <footer className={this.props.desktop ? "footer desktop-footer" : "footer"}>
            <div className="col-lg-12">
              Made with <Emoji symbol="❤️" /> by @supasonk
            </div>
          </footer>
      );
    }
  }

export default Footer;