import React from "react";

function Footer({ setFilter,todo}) {
    const length=todo.filter(item => item.done === false).length
  return (
    <div>
        
      <footer className="footer">
        <span className="todo-count">
          <strong>{length+" "}</strong>
           items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected" onClick={()=>setFilter("ALL")}>All</a>
          </li>
          <li>
            <a href="#/" onClick={()=>setFilter("ACTIVE")}>Active</a>
          </li>
          <li>
            <a href="#/" onClick={()=>setFilter("COMPLETED")}>Completed</a>
          </li>
        </ul>

        {/* <button className="clear-completed" onClick={()=>setTodo(item=>item.filter(item=>item.done===false))}>Clear completed</button> */}
      </footer>
    </div>
  );
}

export default Footer;
