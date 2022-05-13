import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1>James Riggleman</h1>
            <h2>I'm a FullStack Developer.</h2>
            <p>I'm a full-stack Ruby on Rails Developer with experience in JavaScript and React. Currently, I am focused on Freelance development, but I am looking for full-time employment!</p>
            <div>
              <button>View Work <HiArrowNarrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Home
