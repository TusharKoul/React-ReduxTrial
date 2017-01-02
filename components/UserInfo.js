import React, { Component } from 'react';

class UserInfo extends Component {


    handleNewId(event) {
        this.props.actions.createNewUserId()
    }

    handleNewIdIfOdd(event) {
        this.props.actions.createNewUserIdIfOdd()
    }

    handleNewIdAsync(event) {
        this.props.actions.createNewUserIdAsync()
    }

    render() {
        return (
            <div>
                <div>username : {this.props.user.username}</div>
                <div>id: {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update Id</button>
                <button onClick={this.handleNewIdIfOdd.bind(this)}>Update Id ONLY IF ODD</button>
                <button onClick={this.handleNewIdAsync.bind(this)}>Update Id ASYNC</button>
            </div>
        )
    }

}

export default UserInfo
