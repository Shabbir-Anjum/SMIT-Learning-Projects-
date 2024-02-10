import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className=' container'>
          <div className=' flex justify-between' >
            <div>
              Fuits
              <ul>
                <li>Lorem dfsdfd</li>
                <li>Lorem fdf</li>
                <li>Loremvcvcvcv</li>
                <li>Loremvcvcv</li>
                <li>Lorem cddf</li>
              </ul>
            </div>
            <div>
              Services
              <ul>
              <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div>
              List
              <ul>
              <li>Lorem</li>
                <li>Lorem fgnfgn </li>
                <li>Lorem dfxhhf </li>
                <li>Lorem dfggdf</li>
                <li>dfgfdg</li>
              </ul>
            </div>
            <div>
             <div>
              Follow Us
             </div>
             <div className='flex gap-3 py-5'>
            <img src="../Images/fb.png" alt="error" />
            <img src="../Images/twitter.png" alt="error" />
            <img src="../Images/linkedin.png" alt="error" />
            <img src="../Images/instagram.png" alt="error" />
             </div>
             <div>
              Follow Us
             </div>
             <div>
              <input type="text" />
             </div>
             <div>
              <button className='btn bg-OrangeColor'> Subcribe</button>
             </div>
            </div>
          </div>
         
        </footer>
        <div className=' bg-black text-white text-center mt-4'>
            copyright @ all right reserved by Shabbir Anjum
          </div>
    </>
  )
}
