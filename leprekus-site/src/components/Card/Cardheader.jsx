import React from 'react'

function Cardheader({title='Lorem ipsum Dolor',}) {
  return (
    <div className=' flex items-center justify-between
    w-full p-3 absolute top-0'>
        <div className='h-10 w-10 bg-green-400 rounded-full'></div>
        <p className='text-violet-400 text-xs'>{ title }</p>
    </div>
  )
}

export default Cardheader