import React from 'react'
import './mainContainer.css'
import BlogContent from '../BlogContent/page'
import FeaturedContent from '../FeaturedContent/page'

const MainContainerWRapper = () => {
  return (
    <div className='MainContainerWrapper'>
      <BlogContent/>
      <FeaturedContent/>
    </div>
  )
}

export default MainContainerWRapper
