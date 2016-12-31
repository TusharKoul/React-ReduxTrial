import React, { Component } from 'react';

class UserInfo extends Component {


    handleNewId(event) {
        this.props.createNewUserId()
    }

    render() {
        return (
            <div>
                <div>username : {this.props.user.username}</div>
                <div>id: {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update Id</button>
            </div>
        )
    }

}

export default UserInfo
