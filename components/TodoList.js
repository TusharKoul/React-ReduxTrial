import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    createTodoList() {
        return this.props.todos.map((todoItem) => {
            //return <li key={todoItem.id}> {todoItem.text} </li>
            return (<TodoItem key={todoItem.id} todo={todoItem} dispatch={this.props.dispatch}/>);
        });
    }

    render() {
        console.log("rendering list with props",this.props);
        return (
            <ul>
                {this.createTodoList()}
            </ul>
        )
    }

}

export default TodoList;
