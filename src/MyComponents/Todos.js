import React from 'react'
import Todo_item from "../MyComponents/Todo_item";

const Todos = (props) => {let myStyle={
  minHeight:"70vh"
}

  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0? "no todos to display":
      props.todos.map((todo)=>{
 return <><Todo_item todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
 </>
 
      })
          }


    </div>
  )
}

export default Todos
