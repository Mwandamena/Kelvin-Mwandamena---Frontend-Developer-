import React from 'react'

function HeroText() {
  return (
    <div className='flex-1 flex-col flex items-center lg:mb-0 mb-8 text-center lg:text-start'>

      {/* hero text */}
      <h1 className='text-[28px] md:text-[36px] lg:text-[44px] xl:text-[56px] font-bold tracking-wide hero-text uppercase'>
        Making Humanity Multiplanetary
      </h1>

      {/* hero paragraph */}
      <p className='mt-6 text-sm md:text-[20px] max-w-xl lg:mr-12'>
        Building on the Achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of rockets that are going to power planetary exploration with fully reusable launch vehicles. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, at.
      </p>

    </div>
  )
}

export default HeroText