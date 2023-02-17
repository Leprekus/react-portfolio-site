import React from 'react'

function Cardholder({children, title}) {
  return (
    <div>
    <h1 className='my-4'>{ title }</h1>
    <div className='flex flex-wrap gap-3 justify-center my-4
    md:mr-4'>
        {...children}
    </div>
    </div>
  )
}

export default Cardholder