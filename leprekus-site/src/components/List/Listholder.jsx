import React from 'react'

function Listholder({children}) {
  return (
    <div className='flex flex-col items-center gap-2
    w-80 py-3.5
     bg-slate-300 mx-auto'>
        {...children}
    </div>
  )
}

export default Listholder