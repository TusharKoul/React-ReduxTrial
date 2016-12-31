function getId(todos) {
    return todos.reduce((maxId,todo)=> {
        return Math.max(maxId,todo.id)
    },-1) + 1
}

function toggleTodoComplete(todo) {
    return Object.assign({}, todo, {
        completed: !todo.completed
    });
}

export default (state, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [{
                    text: action.text,
                    completed: false,
                    id: getId(state.todos)
                }, ...state.todos]
            });

        case 'COMPLETE_TODO':
            // assign state to new object given in 3rd parameter,
            // for all todos, if the action id matches, then toggle to-do completed and return the object,
            // else return previous to-do
            return Object.assign({}, state,  {
                todos: state.todos.map((todo) => {
                    return todo.id == action.todoId ? toggleTodoComplete(todo) : todo;
                })
            });

        case 'DELETE_TODO':
            // filter runs for each to-do,
            // if the function returns true, then that to-do is kept in the array,
            // all other to-dos are removed
            // so we want keep all todos where action.id doesn't match to-do.id
            return Object.assign({}, state,  {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.todoId
                })
            });

        case 'CREATE_NEW_USER_ID':
            return Object.assign({}, state,  {
                user: {
                    id: action.id,
                }
            });

        default : return state;
    }
}