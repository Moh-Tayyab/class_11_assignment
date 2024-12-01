'use client'
import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }


  return (
    <div className='flex justify-center m-40 space-x-4'>
        <p className='px-8 text-xl'>Count: {count}</p>   
        <button className='px-8 py-3 text-xl bg-green-600 rounded-md hover:bg-green-900' onClick={incrementCount}>Increment</button>
        
        <button className='px-8 py-3 text-xl bg-red-600 rounded-md hover:bg-red-800' onClick={() => setCount(count - 1)}>Decrement</button>   
      
    </div>
  )
}

export default State
