import { useState } from "react";

export default function TodoApp(){
    const [write, setWrite] = useState('');
    const [tasks, setTasks] = useState([]);

    //to add to the list
    //trim used to remove white space
    function AddTask(){
        if(write.trim() === '')
            return;
        const newTask ={id: Date.now(), name: write };
        setTasks([...tasks, newTask]);
        setWrite('');
    }
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id != id));
    }

    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 ">
        <h1 className="text-2xl font-bold mb-4 text-center">My To-Do List</h1>
         <div className="flex gap-2 mb-4">
             <input
            type = "text"
            placeholder="Enter task..."
            className="border p-2 w-full mb-2"
            value={write}
            onChange={(e) => setWrite(e.target.value)}
        />
        <button
            onClick={AddTask}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-full"
        >Add Task </button>

         </div>
       
       <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="bg-gray-100 p-2 my-2 rounded">
            <span>{task.name}</span>

            <button
              onClick={() => deleteTask(tasks.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul> 
      {tasks.length === 0 && (
          <p className="text-gray-400 text-center mt-4">No tasks added yet.</p>
        )}
      </div>
    </div>

    )
}