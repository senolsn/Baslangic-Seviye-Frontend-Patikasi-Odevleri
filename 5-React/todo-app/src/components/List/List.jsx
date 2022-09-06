function List({ todos, setTodos, hide }) {
    const isCompleted = (e) => {
      if (e.checked === true && hide === "All") {
        return "completed";
      } else if (e.checked === true && hide === "Active") {
        return "completed hidden";
      } else if (e.checked === false && hide === "Completed") {
        return "hidden";
      }
    };
  
    const checkTodo = (e) => {
      let newTodos = todos.map((todo) => {
        if (parseInt(todo.id) === parseInt(e.target.id)) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      setTodos(newTodos);
    };
    const deleteTodo = (e) => {
      setTodos(
        todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
      );
    };
  
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
  
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} id={todo.id} className={isCompleted(todo)}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={todo.checked}
                  id={todo.id}
                  onClick={checkTodo}
                />
                <label>{todo.todo}</label>
                <button
                  className="destroy"
                  id={todo.id}
                  onClick={deleteTodo}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default List;
  