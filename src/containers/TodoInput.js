import React, {Component} from "react"

class TodoInput extends Component {
    addTodo = this.props.addTodo;

    input = event => {
        if(event.key === "Enter" && event.target.value !== "") {
            this.addTodo(event.target.value, false);
            event.target.value = "";
        }
    }

    render () {
        return (<input className="todo-app__input" 
                       placeholder="What needs to be done?"
                       id="todo-inpot"
                       onKeyUp={this.input}></input>);
    }
}

export default TodoInput;