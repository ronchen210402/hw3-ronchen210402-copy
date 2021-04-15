import React, { Component } from "react";

var ModeButton = (props) => (
    <li><button onClick={() => props.changeMode(props.text)}>{props.text}</button></li>
);

var ClearButton = (props) => (
    <div className="todo-app__clean">
        <button id="clean-button" onClick={props.clearComplete}>Clear complete</button>
    </div>
);

class Footer extends Component {
    static buttons = ["All", "Active", "Complete"];
    changeMode = this.props.changeMode;
    clearComplete = this.props.clearComplete;

    render() {
        return (
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">{this.props.remains} left</div>
                <ul className="todo-app__view-buttons">
                    {Footer.buttons.map(item => <ModeButton text={item} changeMode={this.changeMode} key={item} />)}
                </ul>
                <ClearButton clearComplete={this.clearComplete} />
            </footer>
        );
    }
}

export default Footer;