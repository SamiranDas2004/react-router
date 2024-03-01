import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './about/About.jsx'
import Contact from './about/Contact.jsx'
import Use from './about/Use.jsx'
import Github from './about/Github.jsx'
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
      
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path: "/home",
//         element:<Home/>
//       },
//       {
//         path: "/contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<Use/>}/>

    <Route path='github' element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  
   
  </React.StrictMode>,
)
