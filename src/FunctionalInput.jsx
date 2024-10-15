import { useEffect, useState } from "react";
import ClassCount from "./ClassCount";

// eslint-disable-next-line react/prop-types
const FunctionalInput = ({ name }) => {
  /*
    We declare two state variables and their setters,
    one to store the To-Do's
    and the other to store the value of the input field
  */
  const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
  const [inputVal, setInputVal] = useState("");
  const [editing, setEditing] = useState(false);

  const handleSetEditing = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleDeleteTodo = (e) => {
    const target = e.target.id;
    const newTodos = todos.filter((todo) => todo !== target);
    setTodos(newTodos);
  };

  const handleEditTodo = (e) => {
    const todo = e.target.id;
    const newTodo = e.target.value;
    const targetIndex = todos.indexOf(todo);
    console.log(targetIndex);
    console.log(newTodo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("");
  };

  return (
    <>
      <section>
        <h3>{name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            value={inputVal}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {todos.map((todo) => (
            <div key={todo}>
              {editing ? (
                <li>
                  <input
                    type="text"
                    id={todo}
                    value={todo}
                    onChange={handleEditTodo}
                  />
                  <button onClick={handleSetEditing}>Resubmit</button>
                </li>
              ) : (
                <>
                  <li>{todo}</li>
                  <button onClick={handleSetEditing}>Edit</button>
                </>
              )}
              <button onClick={handleDeleteTodo} id={todo}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </section>
      <ClassCount count={todos.length} />
    </>
  );
};

export default FunctionalInput;
