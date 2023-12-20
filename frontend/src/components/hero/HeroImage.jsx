import React from 'react'

// import the image
import rocket from '../../assets/rocket.jpg'

function HeroImage() {
  return (
      <img src={rocket} alt="rocket" className='flex-1 rounded-[10px] w-full max-w-[500px]' />
  )
}

export default HeroImage