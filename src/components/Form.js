import React, { useState } from 'react'

function Form({todo,setTodo}) {
    const [temp, setTemp] = useState("")
    const addTodo=(e)=>{
        if (e.key === 'Enter') {
        e.preventDefault();
        setTodo(state=>[...state,{
            id:Math.random()*53,
            job:temp,
            done:false
        }])
        setTemp("");
        
    }
    }
  return (
    
    <div>
    <header className="header">
		<h1>Todos</h1>
		<form onKeyDown={addTodo}>
			<input className="new-todo" placeholder="What needs to be done?" value={temp} name="temp" autoFocus onChange={(e)=>setTemp(e.target.value)}/>
		</form>
	</header>

    </div>
  )
}

export default Form