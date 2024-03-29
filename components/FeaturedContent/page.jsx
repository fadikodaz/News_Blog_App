'use client'
import React, { useEffect , useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Featured.css'
import noposter from '../../public/noposter.jpg'

const FeaturedContent = () => {

  const [data, setData] = useState([]);

  const featureApiHandler = async () => {
    const resp = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b86b8c1f9ec0423cb814bb0e7a4dfbb5`)
    const data = await resp.json()
    setData(data.articles)
  }

  useEffect(()=>{
    featureApiHandler()
  },[])

  let box = data.map(d=>{
    return(
      <div className="box">
        <div className="imgSect">
          <img src={d?.urlToImage} alt={d?.title} />
        </div>
        <Link className='linkTag' href={''}> {d?.title} </Link>
      </div>
    )
  })

  return (
    <div className='featureContainer'>
      <h2 className='titleSource'>Source : BBC </h2>
      <div className="boxWrapper">
        {box}
      </div>
    </div>
  )
}

export default FeaturedContent
