import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import TodoList from './components/TodoList.js'

class App extends Component{
state={
  input: "",
}
  testDispatch=(event)=>{
    console.log(event)
    this.props.dispatch({type:'ADD_TODO', text:this.state.input})
      let input = document.getElementById('inputfield')
      input.value=""
  }

  onChange=(event)=>{
    let input = document.getElementById('inputfield')
    console.log(event.target.value)
    event.preventDefault()
    this.setState({
      input: event.target.value
    })
  }

  render(){
    console.log(this.state.input)

  return (
    <div className="App">
      <h1> The Daily Do's </h1><hr/><br/>
      <label> Add To do: </label>
      <input id="inputfield" onChange={this.onChange} name="input" value={this.state.value} placeholder="Enter todo"></input>
      <button onClick={(event)=>this.testDispatch(this.state, event)}> ADD TASK</button>
      <TodoList /><br />
    </div>
  );
}

}

function mapStateToProps(state){
    console.log(state)
    return{
      todos: state.todos,
    }
}

export default connect(mapStateToProps)(App);
