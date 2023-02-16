import React from 'react';

function Card({ children }) {
  return (
    //change width and height
    <div
      className='min-w-48 h-48 p-4 relative
    bg-gradient-to-bl from-pink-400 to-purple-300 rounded-md'
    >
      {...children}
      <div
        className='w-full absolute left-0 bottom-0 rounded-b-md rounded-tl-3xl rounded-tr-sm
        h-1/3 bg-zinc-100 hover:h-3/4 hover:ease-in ease-out duration-200
        '
      >
        <div></div>
      </div>
    </div>
  );
}

export default Card;
