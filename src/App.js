
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import{ About } from "./MyComponents/About";
import React,{useState,useEffect} from 'react';
import AddTodo from './MyComponents/AddTodo';
//app.css brings style  
//
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
function App() {
  let initTodo;
if(localStorage.getItem("todos")===null){
initTodo=[];
}
else{
  initTodo=JSON.parse(localStorage.getItem("todos"));
}
  //App function ke andar banaye all the code  of javascript
  //yeh jsx hai javascript syntax extension hai ,not the html so beware hehe
  //yrh html and javascript ka mixture hai aaaa!

  //2 types of components in react are class based components and function based components 
  //function based components are a yeh!!
  // hey we can also use ternary operator here


const onDelete=(todo)=>{
  console.log("i am on delete",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  console.log("deleted",todo);
  localStorage.setItem("todos",JSON.stringify(todos));

}


const addTodo=(title,desc)=>{
  console.log("i am adding this todo",title,desc);
  let sno;
  if(todos.length===0){ sno=0;}
  else{
     sno=todos[todos.length-1].sno + 1;
  }
 
  const myTodo={
    sno: sno,
    title: title,
    desc: desc,

  }
  setTodos([...todos,myTodo]);
  
   console.log(myTodo);
   localStorage.setItem("todos",JSON.stringify(todos));


}

const [todos, setTodos] = useState( initTodo  );

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));

  
}, [todos] )




  return (
     <>
    <Router>

     <Header title="MyTODOSLiST" searchbar={true}/>


     <Switch>
          <Route exact path="/" render={()=>{
            return(


              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
  
       </>
            )
           
          }}>
          
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
     
     <Footer/>
     </Router>

    </>
  
  );
}
//bootstrap ek css ka framework hai to make design quickly
//react js is an js library
export default App;
