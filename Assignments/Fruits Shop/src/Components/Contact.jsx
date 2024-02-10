import React from 'react'

export default function Contact() {
  return (
    <>
    <section className=" flex justify-between gap-8 ml-10">
    <div className="">
          <h2 className="heading">Contact Us</h2>

        <form action="submit.js" className='flex flex-col gap-8  w-[400%] '>
           
            <input type="text" placeholder='ENTER' className='border-b outline-none' />
          
            <input type="number" placeholder='PHONE NUMBER' className='border-b outline-none' />
            <input type="email" placeholder='EMAIL' className='border-b outline-none' />
            <input type="text" placeholder='MESSEGE' className='border-b outline-none' />
            <input type="submit"  className='btn bg-OrangeColor w-36 outline-none'/>
        </form>

        </div>
        <div>
            <img src="../Images/orange-dish.png" alt="error" />
        </div>
    </section>
    </>
  )
}
