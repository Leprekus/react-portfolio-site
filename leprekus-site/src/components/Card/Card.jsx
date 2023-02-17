import React from 'react';
import Cardheader from './Cardheader';

function Card({ children, img, header }) {
  return (
    //change width and height
    <div
      className='w-60 h-60 p-4 relative
    bg-gradient-to-bl from-pink-400 to-purple-300 rounded-md'
    >
      <div
        id='custom-scrollbar'
        className='w-full absolute left-0 bottom-0 rounded-b-md rounded-tl-3xl rounded-tr-sm
        h-1/3 bg-zinc-100 hover:h-3/4 hover:ease-in ease-out duration-200
        
        overflow-hidden hover:overflow-y-scroll scroll-smooth
        flex justify-center text-neutral-500
        '
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
