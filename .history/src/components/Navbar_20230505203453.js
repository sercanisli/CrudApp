'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {AiOutlinePlus} from 'react-icons/ai'

export function Navbar() {
    const router = useRouter();
    return (
        <header className='flex-items-center bg-gray-800 px28 py-3'>
            {/* Anasayfaya gidecek '/' */}
            <Link href={'/'}>
                <h1 className='font-black text-3xl text-white'>
                    Crud APP
                </h1>
            </Link>
            <span>
                {/* 
                    TODO: tasks.length 
                */} tasks
            </span>
            <div className="flex-grow text-right">
                <button className='bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-600 font-bold rounded-sm inline-flex items-center'>
                    <AiOutlinePlus classname='mr-2'/>
                </button>
            </div>
        </header>
    )
}