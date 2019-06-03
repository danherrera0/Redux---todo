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
    console.log(event.target.value)
    event.preventDefault()
    this.setState({
      input: event.target.value
    })
  }

  render(){
    console.log(this.state.input)

  return (
    <div className="App" >
      <h1 className="title"> The Daily Do's </h1><br/>
      <div className = "addtododiv">
        <input id="inputfield" onChange={this.onChange} name="input" value={this.state.value} placeholder="Enter todo"></input>
        <button onClick={(event)=>this.testDispatch(this.state, event)}>Add</button>
      </div>
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
