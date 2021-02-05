import { combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const StateTodos = {
    listaTodo: []
}

function reducerTodos(state = StateTodos, action: any) {
    switch (action.type) {
      case 'GET_TODOS':
        return {
          state,
          listaTodo: action.payload
        }
      default:
        return state
    }
  }
  
  const StateUser = {
    name: '', username: '', email: ''
  }
  
  function reducerUser(state = StateUser, action: any) {
    switch (action.type) {
      case 'GET_USERS':
        return {
          name: action.payload.name,
          username: action.payload.username,
          email: action.payload.email,
        }
      default:
        return state
    }
  }
  
  const createRootReducer = () => combineReducers({
    todos: reducerTodos,
    user: reducerUser
  })
  
  const store = createStore(createRootReducer(), composeWithDevTools());
  
  export { store };