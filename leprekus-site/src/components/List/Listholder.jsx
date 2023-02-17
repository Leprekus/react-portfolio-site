import React from 'react'

function Listholder({children}) {
  return (
    <div className='flex flex-col items-center gap-2
    lg:flex-row lg:w-1/2 lg:flex-wrap lg:justify-center
    w-80 py-3.5
     bg-slate-300 mx-auto'>
        {...children}
    </div>
  )
}

export default Listholder