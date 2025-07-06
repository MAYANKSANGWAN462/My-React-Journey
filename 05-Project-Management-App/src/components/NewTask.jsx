//the use of this is it will handle the input of the new tasks in the already exisiting tasks
import { useState } from "react";

export default function NewTask({onAdd}){
    const [enteredTask,setEnteredTask] = useState('');
    
    function handleChange(event){
        setEnteredTask(event.target.value); //two way binding with the input 
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;//so that this function will not execute further
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return(
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-indigo-50">
            <input 
              type="text" 
              className="flex-1 px-4 py-2 rounded-lg bg-indigo-50 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all duration-200 font-quicksand placeholder-indigo-300"
              onChange={handleChange} 
              value={enteredTask}
              placeholder="Enter new task"
            /> {/* two way binding */}
            <button 
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow hover:shadow-md font-handjet tracking-wider whitespace-nowrap"
              onClick={handleClick}
            >
              Add Task
            </button>
        </div>
    );
}
