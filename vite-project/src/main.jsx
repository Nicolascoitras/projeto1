import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import Rank from './routes/Rank.jsx'
const router = createBrowserRouter([

{
  path:"/",
element:<App/>,
children: [
  {
  path: "/",
  element: <Home/>
},
{
  path: "/products",
  element: <Products/>
},
{
 path:"/*",
 element: <ErrorPage/> 
},
{
  path:"/rankdosprof",
  element: <Rank/>
}

]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
