'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

/*
Server Component cannot :
    1. Listen to browser events
    2. Access our browser APIs
    3. Mantain state
    4. Mantain or use effects
*/

const page = () => {
  const[name,setname]=useState('');
  const router=useRouter();
  const handleClick = () =>{
    router.push(`/client/${name}`)
  }
  // const [count, setCount] = useState(0)
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
    <input className='mt-[10px] rounded-lg bg-transparent text-white px-5 py-3 outline outline-white' type='text' value={name} onChange={e=>setname(e.target.value)}/>
    <button onClick={handleClick}>Click</button>
      {/* <h1 className='text-7xl'>{count}</h1>
    <div className="flex flex-col gap-3.5">
      <button className='btn' onClick={() => setCount(count+1)}>Increment</button>
      <button className='btn' onClick={() => setCount(count-1)}>Decrement</button>
      <button className='btn' onClick={() => setCount(0)}>Reset</button>
    </div> */}
    </div>
  )
}

export default page