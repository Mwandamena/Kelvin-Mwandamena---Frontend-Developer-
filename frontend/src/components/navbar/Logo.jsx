import React from 'react'

// import logo asset
import logo from "../../assets/logo.png"

function Logo() {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="logo" className='w-36'/>
      </a>
    </div>
  )
}

export default Logo