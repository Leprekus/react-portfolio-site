import React from 'react'

function Cardholder({children}) {
  return (
    <div className='flex flex-wrap gap-3 justify-center my-4
    md:mr-4'>
        {...children}
    </div>
  )
}

export default Cardholder