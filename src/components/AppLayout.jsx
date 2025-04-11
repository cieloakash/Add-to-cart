import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const AppLayout = () => {
  return (
    <div className='p-10'>
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AppLayout