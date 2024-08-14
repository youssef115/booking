import React from 'react'
import { CiSearch } from 'react-icons/ci'

function HeroSearch() {
  return (
    
        <form className='hero-search'>
            <input type='text' placeholder='xxx' />
            <input type="text" placeholder='yyy'/>
            <input type="text" placeholder="zzz"/>
            <button className='hero-search-btn'><CiSearch size={20} color='white'/></button>
        </form>
    
  )
}

export default HeroSearch