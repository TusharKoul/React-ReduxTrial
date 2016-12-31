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
        console.log("CREATE USER!!");
        return {
            type : 'CREATE_NEW_USER_ID',
            id : Math.random()
        }
    },
};

export default actions;