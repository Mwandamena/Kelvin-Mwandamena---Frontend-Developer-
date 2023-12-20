import React from 'react'

// links
import { links } from '../../constants/links'

function Navlinks() {

  return (
    <div>
      <ul className='flex items-center justify-between gap-8'>
        {links.map((link)=> (
          <li key={link.id}>
            <a href={`/${link.id}`} className='focus:underline hover:underline transition'>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navlinks