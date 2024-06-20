import { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
class TodoList extends Component {
  state = {
    todos: this.props.todos,
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <>
        <AddTodo todos={this.state.todos} addTodo={this.addTodo} />
        <ul>
          {this.state.todo.map((t) => {
            return (
              <li key={t.id}>
                <Todo removeTodo={this.removeTodo} title={t.title} id={t.id} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default TodoList;
