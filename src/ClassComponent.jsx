import { Component } from "react";
import ClassCount from "./ClassCount";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(e) {
    const target = e.target.id;
    const newTodos = this.state.todos.filter((todo) => todo !== target);
    this.setState((state) => ({
      ...state,
      todos: newTodos,
    }));
  }

  render() {
    return (
      <>
        <section>
          {/* eslint-disable-next-line react/prop-types */}
          <h3>{this.props.name}</h3>
          {/* The input field to enter To-Do's */}
          <form onSubmit={this.handleSubmit}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="task-entry">Enter a task: </label>
            <input
              type="text"
              name="task-entry"
              value={this.state.inputVal}
              onChange={this.handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          <h4>All the tasks!</h4>
          {/* The list of all the To-Do's, displayed */}
          <ul>
            {this.state.todos.map((todo) => (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={this.handleDelete} id={todo}>
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </section>
        <ClassCount count={this.state.todos.length} />
      </>
    );
  }
}

export default ClassInput;
