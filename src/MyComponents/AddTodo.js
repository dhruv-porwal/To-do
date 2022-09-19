
import React,{useState} from 'react';

export const AddTodo = ({addTodo}) => {
  
//yeh upar Addtodo function nhi hai but name of our activity /module which we hav enamed as we would be using it to add items in our list
//yeh small a wala addtodo is our actual function which we are getting from app.js
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit=(e)=>{
   e.preventDefault();//e is the state variable. and .preventdefault prevents page from reloading
   if(!title || !desc){
    alert("Title or description cannot be blank");
   }
   
   else{
    addTodo(title,desc);
    setDesc(""); 
    setTitle("");
   }
   
  }   
  return (
    <div className='container my-3'>
      <h3>Add a Todo </h3>
      <form onSubmit={submit}>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo title</label>
          <input type="text" className="form-control" id="title" onChange={(e)=>setTitle(e.target.value)} value={title} />
           
           </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo description</label>
          <input type="text" className="form-control"   id="desc" onChange={(e)=>setDesc(e.target.value)}
          value={desc} />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success"> Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
