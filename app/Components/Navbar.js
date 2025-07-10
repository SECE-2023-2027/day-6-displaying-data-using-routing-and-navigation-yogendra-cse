import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-slate-700 text-white'>
        <li className='flex flex-row justify-center items-center gap-6'>
            <Link href="/User" className='linkBtn'><ul>User</ul></Link>
            <Link href="/about" className='linkBtn'><ul>about us</ul></Link>
            <Link href="/contact" className='linkBtn'><ul>Conact us</ul></Link>
        </li>
    </nav>
  )
}

export default Navbar