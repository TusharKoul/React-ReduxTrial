import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from "react-redux";

class App extends Component {

  render() {
      console.log('App rendering with ',this.props)
    return (
      <div>
          <h1>To do List</h1>
          <TodoInput dispatch={this.props.dispatch} />
          <TodoList todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
    console.log(state)
    return state;
}

export default connect(mapStateToProps)(App);
