import { useState } from 'react';

export default function TodoApp() {
	const [write, setWrite] = useState('');
	const [tasks, setTasks] = useState([]);
    
    function AddTask(){
        if(write.trim() === '')
            return;
        const newTask ={id: Date.now(), name: write, completed: false };
        setTasks([...tasks, newTask]);
        setWrite('');
    }

    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleComplete(id){
        const updatedTasks = tasks.map(task =>{
            if(task.id ===id){
                return{...task, completed: !task.completed};
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    
    return(
    <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='bg-gray-300 shadow-lg rounded-4xl p-9'>
            <h1 className='text-2xl font-bold mb-10 text-center'>To-Do List</h1>
            <div className='flex gap-5 mb-7'>
                <input
                type = 'text'
                placeholder='Enter task...'
                className='border-2 rounded-2xl p-2 w-full mb-2'
                value={write}
                onChange={(e) => setWrite(e.target.value)}
                />

                <button
                onClick={AddTask}
                className='bg-green-500 text-white  rounded-4xl hover:shadow-lg transition-shadow duration-100 w-50'
                >Add Task </button>

                </div>
                
                <ul className='mt-4'>
                    {tasks.map((task) => (
                        <li key={task.id}
                        className='bg-gray-100 px-6 py-1 my-1 rounded-3xl flex justify-between items-center text-sm hover:shadow-lg transition-shadow duration-100'>
                            <input
                            type = 'checkbox'
                            checked = {task.completed}
                            onChange={() => toggleComplete(task.id) }
                            className='mr-2'
                            />
                            <span className={task.completed ? 'line-through text-gray-500' : ''}>
                                {task.name} </span>

                            <button
                            onClick={() => deleteTask(task.id)}
                            className='text-red-900 hover:text-red-700 '
                            >❌ </button>
                            </li>
                        ))} </ul>
                        {tasks.length === 0 && (
                            <p className='text-gray-400 text-center mt-4'>No tasks added yet.</p>
                            )}
        </div>
    </div>
    );
}
