import React, { Component } from "react"
import xImg from "../img/x.png"

var Checkbox = (props) => (
    <div className="todo-app__checkbox">
        <input className="todo-item-input"
                id={props.index.toString()}
                type="checkbox"
                checked={props.checked}
                onChange={props.checkItem}></input>
        <label htmlFor={props.index.toString()}></label>
    </div>
)

var XItem = (props) => (
    <img src={xImg} className="todo-app__item-x" alt="x" onClick={props.deleteTodo}></img>
)

class Item extends Component {
    deleteTodo = () => this.props.deleteTodo(this.props.index);
    checkItem = () => this.props.checkItem(this.props.index);
    
    render() {
        let iClassName = ( this.props.checked ? "todo-app__item-detail checked" : "todo-app__item-detail");
        return (
            <li className="todo-app__item">
                <Checkbox index={this.props.index} checkItem={this.checkItem} checked={this.props.checked}/>
                <h1 className={iClassName}>{this.props.text}</h1>
                <XItem deleteTodo={this.deleteTodo}/>
            </li>
        );
    }
}

class ItemTable extends Component {
    deleteTodo = this.props.deleteTodo;
    checkItem = (index) => this.props.checkItem(index);


    displayItems(mode) {
        let displayTodos = [];
        switch (mode) {
            case "All":
                displayTodos = this.props.todoList.slice();
                break;
            case "Active":
                displayTodos = this.props.todoList.filter(items => !items.checked);
                break;
            case "Complete":
                displayTodos = this.props.todoList.filter(items => items.checked);
                break;
            default:
                displayTodos = [];
                break;
        }

        return (
            displayTodos.map((e, index) => (
                <Item text={e.text}
                      checked={e.checked}
                      index={index}
                      deleteTodo={this.deleteTodo}
                      checkItem={this.checkItem}
                      key={index}/>
            ))
        );
    }

    render() {
        return (
            <ul className="todo-app__list" id="todo-list">
                {this.displayItems(this.props.mode)}
            </ul>
        );
    }
}

export default ItemTable;