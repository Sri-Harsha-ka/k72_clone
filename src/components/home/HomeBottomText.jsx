import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className=''>
            <div className='flex-center gap-10'>
                <Link to='/projects' className='font-[font2] text-9xl border-2 rounded-full px-10 pb-1 pt-4 uppercase tracking-tighter leading-28 hover:border-amber-300 hover:text-amber-300  '>Projects</Link>
                <Link to='/agence' className='font-[font2] text-9xl border-2 rounded-full px-10 pb-1 pt-4 uppercase tracking-tighter leading-28 hover:border-amber-300 hover:text-amber-300  '>Agency</Link>
            </div>
        </div>
    )
}

export default HomeBottomText
