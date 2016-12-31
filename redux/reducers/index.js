import {combineReducers} from 'redux';
import todoReducer from './todo-reducer';
import userReducer from './user-reducer';

const rootReducers = combineReducers({
    todos : todoReducer,
    user : userReducer
});

export default rootReducers;