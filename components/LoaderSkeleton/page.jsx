import React from 'react'
import './Loader.css'

const LoaderSkeleton = () => {
  return (
    <div className='MainCard'>
        <div className="ImgBox">
            <div className="loader"></div>
          </div>
        <div className="contentBox">
            <h1 className='title'>
              <div className="Lineloader"></div>
            </h1>
            <div className='overView'>
              <div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader pLine"></div>
                <div className="Lineloader sLine"></div>
              </div>
            </div>
            <div className="btndev">
                  <div className="Lineloader"></div>
                  <div class="Lineloader"></div>
            </div>
        </div>
    </div> 
  )
}

export default LoaderSkeleton
