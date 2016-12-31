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

let todosReducer = function(todos=[], action) {
    switch (action.type) {

        case 'ADD_TODO':
            return [{
                    text: action.text,
                    completed: false,
                    id: getId(todos)
                }, ...todos];

        case 'COMPLETE_TODO':
            return todos.map((todo) => {
                return todo.id == action.todoId ? toggleTodoComplete(todo) : todo;
            });

        case 'DELETE_TODO':
            // filter runs for each to-do,
            // if the function returns true, then that to-do is kept in the array,
            // all other to-dos are removed
            // so we want keep all todos where action.id doesn't match to-do.id
            return todos.filter((todo) => {
                return todo.id !== action.todoId
            });

        default : return todos;
    }
};

export default todosReducer;