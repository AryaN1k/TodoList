import { LuListTodo } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import Todoitems from "./Todoitems";
import { useEffect, useRef, useState } from "react";

const Todo = () => {
   const [todo, setTodo] = useState(
    localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [])
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return null;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      iscomplete: false,
    };
    setTodo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
}
    const deleteTodo = (id) => {
        setTodo((prevTodo) => {
            return prevTodo.filter((todo) => todo.id !== id)
        })
    }
    const toggle = (id) => {
        setTodo((prevTodo) => {
            return prevTodo.map((todo) => {
                if(todo.id === id){
                    return{...todo, iscomplete:!todo.iscomplete}
                }
                return todo;
            })
        })
     }
     useEffect (() => {
        localStorage.setItem("todo" , JSON.stringify(todo))
     },[todo])
    return (
      <div className="bg-transparent border place-self-center w-11/12  max-w-sm  min-h-[550px] rounded-xl p-4 sm:p-6 flex flex-col my-16">
        <div className="flex gap-2 px-4 items-center">
          <LuListTodo className="text-3xl text-orange-500" />
          <h1 className="text-xl sm:text-3xl font-semibold text-zinc-200 ">Todo List</h1>
        </div>
  
        {/* --------- Input ----------- */}
  
        <div className="flex items-center justify-center border  rounded-full my-5">
          <input
            ref={inputRef}
            className="w-full bg-transparent text-slate-100 px-2 font-semibold text-sm capitalize border-0 outline-none pl-4"
            type="text"
          />
          <button onClick={add}>
            <IoMdAdd
              className="bg-orange-500 text-white text-sm
                 rounded-full w-12 sm:w-20 h-8"
            />
          </button>
        </div>
  
        {/* --------- Todo List ----------- */}
        <div>
          {todo.map((item, index) => {
            return <Todoitems text={item.text} key={index} id={item.id} iscomplete={item.iscomplete} deleteTodo={deleteTodo}  toggle={toggle}  />;
            
          })}
        </div>
      </div>
    );
  };


export default Todo;
