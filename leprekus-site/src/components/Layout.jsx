import React from 'react'

function Layout({children}) {
  return (
    <section className="h-full flex flex-col-reverse w-full
    md:flex-row items-start
    ">
    {...children}
    </section>
  )
}

export default Layout