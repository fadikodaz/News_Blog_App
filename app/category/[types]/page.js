'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LoaderSkeleton from '@/components/LoaderSkeleton/page'
import noPoster from '@/public/noposter.jpg'
import './CategoryTypes.css'

const CategoryTypes = ({params}) => {

    const types = params.types

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer); 
    }, []);
  
  
    const [data, setData] = useState([]);

    const fetchApiHandler = async () => {
        
        const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${types ? types : 'business'}&apiKey=b86b8c1f9ec0423cb814bb0e7a4dfbb5`)
        const data = await resp.json()
        setData(data.articles)
    }
    useEffect(()=>{
        fetchApiHandler()
    },[])
  
    
    let cards = data.map((d,id)=>{
      return (
  
          isLoading
          ?
          <LoaderSkeleton/>
          :
          <div className='MainCard'>
            <div className="ImgBox">
                {
                    d?.urlToImage
                    ?
                    (<img className='img' src={d?.urlToImage} alt="" />)
                    :
                    (<Image priority className='img' src={noPoster} alt="" />)
                }
            </div>
            <div className="contentBox">
                <h1 className='Title'>{d?.title}</h1>
                <div className='Over_View'>
                  <p>{d?.description}</p>
                </div>
                <div className="readMorBtn">
                    <p className="date">24-03-2024</p>
                    <button onClick={()=>{DetailHandler(d?.title)}}>Read more...</button>
                </div>
            </div>
          </div>
        
      )
  })

  return (
    <div className='ResultsWrapper'>
        <div className='searchKeyWord'> Category <strong>' {types} '</strong></div>
        {
          cards.length > 0
          ?
          cards
          :
          <h1 className='errorMsg'>'Your Category not found'</h1>
        }
    </div>
  )
}

export default CategoryTypes
