import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {

  const handleSubscribe = () => {
    alert('Subscribed');
  };

  return (
    <div className='newsletter'>
        <h1>Get Exclusicve Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            {/* <input type="email" placeholder='Enter Your Email' /> */}
            <input type="email" id="email" name="email" placeholder='Enter Your Email' autoComplete='email' />

            <button onClick={handleSubscribe}>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter