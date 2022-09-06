import { useState } from "react";
function Footer({ todos, setTodos, setHide }) {
  
  const unCompleted = todos.filter((todo) => todo.checked === false);
  
  const [select, setSelect] = useState("selected", "", "");
  
  const clearCompleted = (e) => {
    setTodos(todos.filter((todo) => todo.checked === false));
  };
 
  const selectedButton = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect("selected", "", "");
        setHide("All");
        break;
      case "Active":
        setSelect("", "selected", "");
        setHide("Active");
        break;
      case "Completed":
        setSelect("", "", "selected");
        setHide("Completed");
        break;
      default:
    }
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length} </strong>
        {unCompleted.length > 0 ? " items left." : " item left."}
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className={[select[0]]} id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={[select[1]]} id="Active" onClick={selectedButton}>Active</a>
        </li>
        <li>
          <a href="#/" className={[select[2]]} id="Completed" onClick={selectedButton}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}

export default Footer;
