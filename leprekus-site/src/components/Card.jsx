import React from 'react'

function Card({children}) {
  return (
    <div className='w-48 h-48 p-4 relative
    bg-gradient-to-bl from-pink-400 to-purple-300 rounded-md'>
        {...children}
        <div className='w-full absolute left-0 bottom-0 rounded-b-md rounded-tl-3xl rounded-tr-sm
        h-1/3 bg-zinc-100
        '></div>
    </div>
  )
}

export default Card