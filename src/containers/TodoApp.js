import React, { Component } from "react";
import Header from "../components/Header";
import Main from "./Main.js"
import Footer from "./Footer.js"

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            remains: 0,
            mode: "All"
        }
    }

    addTodo = (text, checked) => this.setState(state => {
        const tempTodos = state.todos.concat({text, checked});
        // const tempTodos = [...state.todos, {text, checked}]
        return ({ todos: tempTodos, remains: state.remains + 1 });
    });
    deleteTodo = (index) => this.setState(state => {
        let remains = state.remains;
        if(!state.todos[index].checked) --remains;
        const tempTodos = state.todos.filter((item, j) => index !== j);
        return ({ todos: tempTodos, remains: remains });
    });
    clearComplete = () => this.setState(state => {
        const tempTodos = state.todos.filter((item) => !item.checked);
        return ({ todos: tempTodos, remains: tempTodos.length })
    });

    checkItem = (index) => this.setState(state => {
        let counter = 0;
        const tempTodos = state.todos.map((item, j) => {
            if (j === index) {
                if(item.checked) ++counter;
                return { text: item.text, checked: !item.checked };
            }
            else {
                if(!item.checked) ++counter;
                return item;
            }
        });
        return ({ todos: tempTodos, remains: counter });
    });

    changeMode = (mode) => this.setState(state => ({ mode: mode }));

    render() {
        return (
            <div id="root" className="todo-app__root">
                <Header text="todos" />
                <Main   todos={this.state.todos}
                        addTodo={this.addTodo}
                        deleteTodo={this.deleteTodo}
                        checkItem={this.checkItem}
                        mode={this.state.mode}/>
                <Footer remains={this.state.remains}
                        mode={this.state.mode}
                        changeMode={this.changeMode}
                        clearComplete={this.clearComplete}/>
            </div>
        );
    }
}

export default TodoApp;
