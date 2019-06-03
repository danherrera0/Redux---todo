import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'


function TodoList(props){
  console.log(props)
  return(
    <div className="todo-list">
      {props.todos.map((todo,index)=>(
          <Todo key={index} todo={todo}/>
      ))}
    </div>

  )
}

function mapStateToProps(state){
    return{
      todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);
