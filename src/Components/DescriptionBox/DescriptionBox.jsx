import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to Stylekart, where innovation meets style in the digital marketplace! Dive into a world of limitless possibilities, curated just for you. Explore an exquisite collection of trend-setting products that redefine elegance and functionality.</p>
            <p>At Stylekart, we prioritize quality and customer satisfaction. Immerse yourself in a user-friendly interface designed for easy navigation, allowing you to effortlessly find the perfect items to complement your lifestyle. Our commitment to excellence extends to a secure and efficient checkout process, ensuring your purchases reach you in perfect condition and on time.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
