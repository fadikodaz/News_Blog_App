'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import './header.css'
import CategoryTypes from '@/app/category/[types]/page'


const Header = () => {

    const router =  useRouter()

    const CategoryHandler = (type) =>{
          router.push(`/category/${type}`)
    }

    const [searchQuery, setSearchQuery] = useState('');
    const onInputHandler = (key) =>{
      if(key === 'Enter' && searchQuery.length > 0)
      {
          router.push(`/Search/${searchQuery}`)
          setSearchQuery('')
      }
    }
  
    const [active, setActive] = useState(0)
    const MenuList = [
        {name: 'Home' , path: '/'},
        {name: 'News' , path: '#'},
        {name: 'Features' , path: '#'},
    ]
    let list = MenuList.map((e,id)=>{
        return(
            <li key={id}><Link onClick={()=>{setActive(id)}} href={'/'} className={`linkTag ${active === id ? 'active' : ''}`}>{e.name}</Link></li>
        )
    })

  return (
    <div className='Header'>
      <div className="logo">
        <h2>News•</h2>
      </div>
      <ul> 
        {list}
        <li className='ParentCategoryBox'>
          Category
          <ul className='categoryList'>
            <li onClick={()=>{CategoryHandler('bussiness')}} >Business</li>
            <li onClick={()=>{CategoryHandler('entertainment')}} >Entertainment</li>
            <li onClick={()=>{CategoryHandler('general')}} >General</li>
            <li onClick={()=>{CategoryHandler('health')}} >Health</li>
            <li onClick={()=>{CategoryHandler('science')}} >Science</li>
            <li onClick={()=>{CategoryHandler('sports')}} >Sports</li>
            <li onClick={()=>{CategoryHandler('technology')}} >Technology</li>
          </ul>
        </li>
      </ul>
      <div className="searchField">
        <i className="ri-search-line"></i>
        <input  onChange={(e)=>{setSearchQuery(e.target.value)}} onKeyUp={(e)=>{onInputHandler(e.key)}} value={searchQuery} type="text" placeholder='Search here...' />
      </div>
    </div>
  )
}

export default Header
