import { useTasks } from '@/context/TaskContext'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-hot-toast';
import {VscTrash} from 'react-icons/vsc'

const TaskCard = ({task}) => {
    const {deleteTask} = useTasks();
    const router = useRouter();
  return (
    <div className='bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 flex justify-between'
    onClick={() => router.push(`/edit/${task/id}`)}
    >
        <div className="flex justify-between">
            <h1 className="font-bold">
                {task.title}
            </h1>
            <button className='bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center'
            onClick={(e) => {
                e.stopPropagation();
                const accept = confirm ("Are you sure you want to delete this task ?")
                if(accept)
                {
                    deleteTask(task.id);
                }
                toast.success('Task deleted succesfully')
            }}
            >
                <VscTrash className='mr-2'/>
            </button>
        </div>
        <p className="text-gray-300">
            {task.description}
        </p>
        <span className="text-gray-400 text-xs">
            {task.id}
        </span>
    </div>
  )
}

export default TaskCard