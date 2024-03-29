import React from 'react'
import './SmallLoader.css'

const SmallLoader = () => {
  return (
    <div className='BlogCards'>
            <div className="BlogImgBox">
                <div className="loader"></div>
            </div>
            <div className="innerBox">
                <h1 className='BlogTitle'>
                    <div className="Lineloader"></div>
                </h1>
                <div className='BLogOverView'>
                    <div className="Lineloader pLine"></div>
                    <div className="Lineloader pLine"></div>
                    <div className="Lineloader sLine"></div>
                </div>
                <div className="loderdiv">
                    <div className="Lineloader"></div>
                    <div className="Lineloader"></div>
                </div>
            </div>
    </div>
  )
}

export default SmallLoader
