import React from 'react'
import Layout from '../components/Layout'

function Contact() {
  return (
    <section className='flex flex-col text-center
    md:flex-row md:justify-between md:items-start
    '>
      <h1>Contact <span className='text-pink-400'>Me.</span></h1>
      <form className='flex flex-col items-start w-full
      md:w-1/2' netflify name='contact' method='POST'>
        <input className='w-1/2 bg-[#20232f] focus:outline-none' type='name' name='name' placeholder="Name" />
        <hr className='h-px my-4 bg-slate-600 border-0 w-3/4'/>
        <input className='w-1/2 bg-[#20232f] focus:outline-none' type='email' name='email' placeholder="Email" />
        <hr className='h-px my-4 bg-slate-600 border-0 w-3/4'/>
        <input className='w-1/2 bg-[#20232f] focus:outline-none' type='text' name='message' placeholder="Message" />
        <hr className='h-px my-4 bg-slate-600 border-0 w-3/4'/>
        <button className='w-1/2 focus:outline-none cursor-pointer
        px-4 py-2 bg-pink-400 rounded-full hover:bg-pink-600
        hover:transition-all transition-all
        ' type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact