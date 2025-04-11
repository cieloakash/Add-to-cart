

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
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
        default:true,
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
