'use client'
import React, { useEffect, useState } from 'react'
import MainBlogCard from '../MainBlogCard/page'
import SmallBlogCards from '../smallBlogCards/page'
import './Blog.css'

const BlogContent = () => {

    const [MainBlog, setMainBlog] = useState('');
    const [results, setResults] = useState([]);
    // https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b86b8c1f9ec0423cb814bb0e7a4dfbb5
    const fetchApiHandler = async () => {
        const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b86b8c1f9ec0423cb814bb0e7a4dfbb5`)
        const data = await resp.json()
        setResults(data.articles)
        setMainBlog(data.articles[Math.floor(Math.random() * 20 )])
    }


    useEffect(()=>{
        setTimeout(() => {
            fetchApiHandler()
        }, 2000);
    },[])

  return (
    <div className='blogWrapper'>
      <h2 className='MainTitle'>Top Headlines</h2>
      <MainBlogCard MainBlog={MainBlog} />
      <SmallBlogCards data={results}/>
    </div>
  )
}

export default BlogContent
