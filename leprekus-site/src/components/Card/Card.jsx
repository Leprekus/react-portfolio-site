import React, { useRef } from 'react';
import Cardheader from './Cardheader';

function Card({ children, img, header }) {
  const divRef = useRef(null)
  const handleExpand = () => {
    divRef.current.scrollTo(0,0)
    divRef.current.style.overflowY === 'scroll' ?
    divRef.current.style.overflowY = 'hidden':
    divRef.current.style.overflowY = 'scroll'

    if(divRef.current.style.height === '75%') {
      return divRef.current.style.height = '33%'
    }
    return divRef.current.style.height = '75%'
    
  }
  
  return (
    //change width and height
    <div
      className='w-60 h-60 p-4 relative
    bg-gradient-to-bl from-pink-400 to-purple-300 rounded-md'
    >
      <div
        id='custom-scrollbar'
        className='w-full absolute left-0 bottom-0 rounded-b-md rounded-tl-3xl rounded-tr-sm
        h-1/3 bg-zinc-100  hover:ease-in ease-out duration-200
      
        overflow-hidden cursor-pointer scroll-smooth
        flex justify-center text-neutral-500
        '
        onClick={handleExpand} ref={divRef}
        >
        <Cardheader img={img} header={header}/>
        <div className='text-xs relative w-full pl-5 top-24'>
          {...children}
        </div>
      </div>
    </div>
  );
}

export default Card;
