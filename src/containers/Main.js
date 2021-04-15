import React, { Component } from "react";
import TodoInput from "./TodoInput"
import ItemTable from "./ItemTable"

class Main extends Component {
    addTodo = this.props.addTodo;
    deleteTodo = this.props.deleteTodo;
    checkItem = this.props.checkItem;

    render() {
        return (
            <section className="todo-app__main">
                <TodoInput addTodo={this.addTodo} />
                <ItemTable todoList={this.props.todos}
                           deleteTodo={this.deleteTodo}
                           checkItem={this.checkItem}
                           mode={this.props.mode}/>
            </section>
        );
    }
}

export default Main;