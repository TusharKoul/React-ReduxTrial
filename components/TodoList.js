import React, { Component } from 'react'

class TodoList extends Component {

    createTodoList() {
        return this.props.todos.map((todoItem) => {
            return <li key={todoItem.id}> {todoItem.text} </li>
        });
    }

    render() {
        console.log("rendering list with props",this.props)
        return (
            <ul>
                {this.createTodoList()}
            </ul>
        )
    }

}

export default TodoList
