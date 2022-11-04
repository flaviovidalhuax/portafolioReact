import React from 'react'
import './style/callme.css'

const CallMe = () => {
  return (
    <form  className='callme'>
        <div className='callme_contian'>
        <h3 className='callme_h3'>call me</h3>
       <div>
            <input className='callme_input' type="name" placeholder='put your name' />
       </div>
       <div>
            <input className='callme_input' type="email"  placeholder='put your email' />
       </div>
       <div>
            <input className='callme_input mesage' type="text" placeholder='send mesage' />
       </div>
       <button className='callme_btn'>send</button>
        </div>
    </form>
  )
}

export default CallMe