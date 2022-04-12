
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [todo, setTodo] = useState([]);
 
  const [filter, setFilter] = useState("ALL");
  
  
  return (
    <div className="todoapp">
      <Form todo={todo} setTodo={setTodo}/>
      <List todo={todo} setTodo={setTodo} filter={filter}/>
      <Footer todo={todo} setFilter={setFilter} />
    </div>
  );
}

export default App;
