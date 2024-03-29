'use client'
import './MainBlogCard.css'
import Image from 'next/image'
import noposter from '@/public/noposter.jpg'
import LoaderSkeleton from '../LoaderSkeleton/page'
import { useRouter } from 'next/navigation'


const MainBlogCard = ({MainBlog}) => {

  const router =  useRouter()
 
    const DetailHandler = (title) =>{
          router.push(`/TopHeadLines/${title}`)
    }

  return (

    MainBlog
    ?
    <div className='MainCard'>
        <div className="ImgBox">
              {
                  MainBlog?.urlToImage
                  ?
                  (<img className='img' src={MainBlog?.urlToImage} alt="" />)
                  :
                  (<Image priority className='img' src={noposter} alt="" />)
              }
          </div>
        <div className="contentBox">
            <h1 className='title'>{MainBlog?.title}</h1>
            <div className='overView'>
              <p>{MainBlog?.content}</p>
            </div>
            <div className="readMorBtn">
                <p className="date">24-03-2024</p>
                <button onClick={()=>{DetailHandler(MainBlog?.title)}}>Read more...</button>
            </div>
        </div>
    </div> 
    :
    <LoaderSkeleton/>
  )
}

export default MainBlogCard
