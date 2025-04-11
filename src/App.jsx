import { useEffect, useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import ProductListing from './components/pages/ProductListing'
import ProductDetail from './components/pages/prductDetail/ProductDetail'
import Cart from './components/pages/cart/Cart'



function App() {

 const routerDom = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/store',
        element:<ProductListing/>
      },
      {
        path:'/store/pd/:productId',
        element:<ProductDetail/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
 ])


  return (
  <div>
    <RouterProvider router={routerDom}/>
  </div>
   
  )
}

export default App
