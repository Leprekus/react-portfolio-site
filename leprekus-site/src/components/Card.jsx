import React from 'react'

function Card({children, className},) {
  return (
    <div className={`min-w-fit h-auto p-4
    bg-neutral-900 rounded-md ${{ ...className }}`}>
        {...children}
    </div>
  )
}

export default Card