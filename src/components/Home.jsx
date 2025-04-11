import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='my-10'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam nulla, eos odio eius, optio cumque deserunt exercitationem praesentium libero quos quis?</p>
        </div>
        <Link to='/store' className='px-3 py-5 bg-green-400 '>Go to Product</Link>
        
    </div>
  )
}

export default Home