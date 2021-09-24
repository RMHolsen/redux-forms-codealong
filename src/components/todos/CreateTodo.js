import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    // use the arrow function so it's bound to the instance of this component, createtodo
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData }),
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}> 
          <input type="text" placeholder="add todo" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);