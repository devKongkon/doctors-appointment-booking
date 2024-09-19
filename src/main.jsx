
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} errorElement = {<Error/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/' element = {<Contact/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
