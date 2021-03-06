import React from 'react'
import { connect } from 'react-redux'

class Todo extends React.Component{
  complete_todo=(todo)=>{
    console.log(todo)
    this.props.dispatch({type:'COMPLETE_TODO', todo:todo})
  }

  delete_todo=(todo)=>{
    this.props.dispatch({type:'DELETE_TODO', todo:todo})
  }

  render(){
  return(
    <div className="todo-container">
    <div className="todo-item">
    <h4>{this.props.todo.key+1}.</h4>
    <h4>{this.props.todo.text}</h4>
    <h5>{this.props.todo.completed? "Done":"In Progress"}</h5>
    <button onClick={(event)=>this.complete_todo(this.props.todo)}>Complete</button>
    <button onClick={(event)=>this.delete_todo(this.props.todo)}>Delete</button>
    </div>
    </div>

  )
}
}

function mapStateToProps(state){
    console.log(state)
    return{
      todos: state.todos,
    }
}

export default connect(mapStateToProps)(Todo);
