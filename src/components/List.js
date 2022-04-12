import React, { useEffect,useState } from 'react'

function List({todo,setTodo,filter}) {
    const [filteredData, setfilteredData] = useState(todo)
    useEffect(() => {
      if(filter==="ACTIVE")
      {
          setfilteredData(todo.filter(item=>!item.done))
      }
      else if(filter==="COMPLETED")
      {
        setfilteredData(todo.filter(item=>item.done))
      }
      else
      {
          setfilteredData(todo)
      }
      
    }, [filter,todo])
    

    const toggleTodo=(id)=>{
        const newTodo=todo.map(item=>item.id===id?{...item,done:!item.done}:item);
        setTodo(newTodo)
        console.log(newTodo);
    }
    
    const deleteTodo=(id)=>{
        const newTodo=todo.filter(todo=>todo.id!==id);
  
        setTodo(newTodo);
    }
  return (
    <div>
<section className="main">
		<input className="toggle-all" type="checkbox"/>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
		<ul className="todo-list">
			
                {filteredData.map((item,index)=>
                <li className={item.done?"completed":""} key={index}>
                <div className="view">
					<input className="toggle" type="checkbox" onChange={()=>toggleTodo(item.id)}/>
					<label >{item.job}</label>
					<button className="destroy" onClick={()=>deleteTodo(item.id)}></button>
				</div>
                </li>)}
				
			

		</ul>
	</section>
    </div>
  )
}

export default List