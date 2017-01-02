let actions = {
    addTodo(text) {
        return {
            type : 'ADD_TODO',
            text : text
        }
    },

    completeTodo(todoId) {
        return {
            type : 'COMPLETE_TODO',
            todoId : todoId
        }
    },

    deleteTodo(todoId) {
        return {
            type : 'DELETE_TODO',
            todoId : todoId
        }
    },

    createNewUserId() {
        return {
            type : 'CREATE_NEW_USER_ID',
            id : Math.round(Math.random() * 1000)
        }
    },

    createNewUserIdIfOdd() {
        // Redux-Thunk code for async tasks
        return (dispatch, getState) => {
            const {user} = getState();       // To pull out {user} info from state, kinda like import
            if (user.id % 2 === 0) {
                return;
            }
            dispatch(actions.createNewUserId())
        }
    },

    createNewUserIdAsync() {
        // Redux-Thunk code for async tasks
        return (dispatch, getState) => {
            setTimeout(() => {
                dispatch(actions.createNewUserId())
            },2000);
        }
    }
};

export default actions;