"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {v4 as uuid} from 'uuid'

const { createContext, useContext } = require("react");

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context)
    {
        throw new Error('useTasks must be used with a TasksProvider ');
    }
    return context;
}

export const TasksProvider = ({children}) => {
    const[tasks, setTasks] =useLocalStorage('tasks', [])

    const createTask = (title, description) => {
        setTasks([...tasks, {id: uuid(), title, description }])
    }
    const updateTask = (id, uptatedTask) => {
        setTasks([...tasks.map((task) => task.id == id ? {...tasks, ...updatedTask}: task)])
    }
    const deleteTask = (id) => {
        setTasks([...tasks.filter(task => task.id !== id)])
    } 
    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                updateTask,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}