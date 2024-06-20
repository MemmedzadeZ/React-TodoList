import { Component } from "react";

class Todo extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
  };

  handleDelete = () => {
    this.props.removeTodo(this.state.id);
  };
  render() {
    return (
      <div>
        <h2>Todo</h2>
        <p>ID - {this.state.id}</p>
        <p>{this.state.title}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Todo;
