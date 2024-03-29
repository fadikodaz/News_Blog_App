import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './SmallBlogCards.css'
import noPoster from '../../public/noposter.jpg'
import SmallLoader from '../smallLoaderSkeleton/page'

const SmallBlogCards = ({data}) => {

    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

   let cards = data.map((d,id)=>{
    return (

        isLoading
        ?
        <SmallLoader/>
        :
        <div className='BlogCards' key={id}>
            <div className="BlogImgBox">
                {
                    d?.urlToImage
                    ?
                    (<img className='img' src={d?.urlToImage} alt="" />)
                    :
                    (<Image className='img' priority src={noPoster} alt="" />)
                }
            </div>
            <div className="BlogContentBox">
                <h1 className='BlogTitle'>
                    {d?.title}
                </h1>
                <p className='BLogOverView'>
                    {d?.description}
                </p>
                <div className="BLogReadMorBtn">
                    <p className="date">24-03-2024</p>
                    <button>Read more...</button>
                </div>
            </div>
        </div>

    )
    })

  return (
    <div className='GridBox'>{cards}</div>
  )
}

export default SmallBlogCards
