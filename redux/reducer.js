import actions from './actions'

function getId(todos) {
    return todos.reduce((maxId,todo)=> {
        return Math.max(maxId,todo.id)
    },-1) + 1
}

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TODOS':
            return Object.assign({}, state, {
                todos: [{
                    text: action.text,
                    completed: false,
                    id: getId(state.todos)
                }, ...state.todos]
    });

        default : return state;
    }
}