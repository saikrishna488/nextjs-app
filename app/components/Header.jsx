import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='nav-con'>
      <nav>
        <h2>Saikrishna488</h2>
        <ul>
            <li><Link className='link' href="/">Home</Link></li>
            <li><Link className='link' href="/about">About</Link></li>
            <li><Link className='link' href="/code">Code</Link></li>
        </ul>
    </nav>
    </div>
    
    </>
  )
}

export default Header
