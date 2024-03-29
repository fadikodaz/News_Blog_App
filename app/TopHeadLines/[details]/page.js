'use client'
import React, { useEffect, useState } from 'react'
import './ReadMore.css'

const ReadMorePage = ({params}) => {

  const TitleKeyWord = params.details
  const val = TitleKeyWord.replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, ' ')
  console.log(val)

  // const [data, setData] = useState([]);

  // const fetchApiHandler = async () => {
  //   const resp = await fetch(`https://newsapi.org/v2/everything?q=${val}&apiKey=b86b8c1f9ec0423cb814bb0e7a4dfbb5`)
  //   const data = await resp.json()
  //   // setData(data.articles)
  //   // console.log(data)
  // }
  // useEffect(()=>{
  //   fetchApiHandler()
  // },[])

  return (
    <div className='readMoreWrapper'>

        <div className='ContentContainer'>
            <p className='newsCategory'></p>
        </div>

    </div>
  )
}

export default ReadMorePage
