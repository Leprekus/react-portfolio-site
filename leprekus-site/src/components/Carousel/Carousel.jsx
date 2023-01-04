import React, { useState, useEffect } from 'react'

import './Carousel.css'

//carouselItem receives width from Carousel
//to know how many children to render
export const CarouselItem = ({ children, width }) => {
    return (
        <div className='item' style={{ width: width }}>
            { children }
        </div>
    )
}

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex =  React.Children.count(children) - 1; 
        } else if (newIndex >= children.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
    }
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         updateIndex(activeIndex + 1)
    //     }, 5000)
    //     return () => { if(interval) clearInterval(interval) }
    // })
    return (
        <div className='carousel'>
            <button onClick={() => updateIndex(activeIndex - 1)}>Previous</button>
            <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    //100width => displays 1 item
                    //50 widtgh => displays 2 items and so on
                    return React.cloneElement(child, { width: '100%' })
                })}
            </div>
            {React.Children.map(children, (child, index) => {
                return (
                    <button 
                    style={{ position: 'relative', bottom: 25 }}
                    className={index === activeIndex ? 'active-item' : 'unactive-item'}
                    onClick={() => {
                        updateIndex(index)
                    }}
                    >{ index + 1 }</button>
                )
            })}
        </div>
    )
}

export default Carousel