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
};

export default actions;