import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function reducer(state = {
  todos:[{
    key:0,
    text:"eat food",
    completed:false
  }]
}, action){
  switch(action.type){
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, {key: state.todos.length, text:action.text, completed:false}] }
    case 'COMPLETE_TODO':
      return {...state, todos:state.todos.map(todo=>
        (todo.key === action.todo.key)
         ? {...todo, completed: true}
         :todo
       )}
    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(todo=>
        (todo.key !== action.todo.key)
      ) }
    default:
    return state;
  }
}

const store = createStore(reducer)

// dispatch , getState - store functions
// console.log(store.getState())
// store.dispatch({type:"ADD_TODO"})

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>


  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
