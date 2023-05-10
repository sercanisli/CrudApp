'use client'

import TaskCard from '@/components/TaskCard';
import { useTasks } from '@/context/TaskContext'
import React from 'react'

const Home = () => {
    const {tasks} = useTasks();
  return (
    <div className='flex justify-center'>
        {tasks.length === 0 ? (
            <div className='block'>
                <h2 className="text-2xl">
                    There are no tasks
                </h2>
            </div>
        ): (
            <div className="w-7/10">
                {tasks.map((task, i) => (
                    <TaskCard key={i} task={task}/>
                ))}
            </div>
        )}
    </div>
  )
}

export default Home