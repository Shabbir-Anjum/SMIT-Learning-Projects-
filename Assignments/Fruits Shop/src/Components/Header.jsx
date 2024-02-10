import React from 'react'

export default function Header() {
  return (
    <>
        <header className=' bg-WhiteColor'>
            <nav className='flex  justify-between p-2 items-center'>
                <div className='font-bold text-xl'>
                <img src="../Images/logo.png" alt="error" className='inline'/> TROPIKO
                </div>
                <div className='flex items-center gap-10 font-Kanit'>
                    <ul className=' flex gap-10'>
                        <li>Home</li>
                        <li>Fruits</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                    <div>
                    <img src="../Images/search-icon.png" alt="error" />
                </div>
                <div>
                    <button className=' bg-OrangeColor btn'>Get A Quite</button>
                </div>
                </div>
              
            </nav>
        </header>
    </>
  )
}
