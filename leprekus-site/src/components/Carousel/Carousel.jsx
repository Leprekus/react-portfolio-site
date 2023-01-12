import { display } from '@mui/system'
import React, { useState, useEffect } from 'react'

import './Carousel.css'

//carouselItem receives width from Carousel
//to know how many children to render
export const CarouselItem = ({ children, caption, width }) => {
    return (
        <div className='item' style={{ width: width, display: 'flex', flexDirection: 'column' }}>
            { children }
            <p style={{ color: '#5e5e5e' }}>{ caption }</p>
        </div>
    )
}

const Carousel = ({ children, displayItems, translate=100, caption }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    let innerWidth = 100
    let showNav = true
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = displayItems ?  
            displayItems  - 2 : 
            React.Children.count(children) - 1; 
        } else if (newIndex >= displayItems - 1) {
            newIndex = 0;
        } else if (newIndex >= children.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
    }
    if(displayItems) {
        innerWidth = innerWidth/displayItems
        showNav = false
    }
    return (
        <div className='carousel' style={{ width: '90%', margin: 'auto' }}>
            <button className='button-previous' onClick={() => updateIndex(activeIndex - 1)}></button>
            <button className='button-next' onClick={() => updateIndex(activeIndex + 1)}></button>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * translate}%)`, width: '100%' }}>
                {React.Children.map(children, (child, index) => {
                    //100width => displays 1 item
                    //50 widtgh => displays 2 items and so on
                    return React.cloneElement(child, { width: `${innerWidth}%`, caption })
                })}
            </div>
            {showNav && React.Children.map(children, (child, index) => {
                return (
                    <button 
                    style={{ position: 'relative', bottom: 25, margin: ' 0 0.1rem'}}
                    className={index === activeIndex ? 'active-item' : 'unactive-item'}
                    onClick={() => {
                        updateIndex(index)
                    }}
                    ></button>
                )
            })}
        </div>
    )
}

export default Carousel