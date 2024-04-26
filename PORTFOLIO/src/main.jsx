import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<About />} />
    <Route path='/skills' element={<Skills/>}/>
  </Route>
)) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
