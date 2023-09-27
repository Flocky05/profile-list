import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileCard from './components/Profile/ProfileCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Hero></Hero>,
        loader:()=>fetch('profile.json')
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/profileDetails",
        element:<ProfileDetails></ProfileDetails>
      },
      {
        path:"/profileCard",
        element:<ProfileCard></ProfileCard>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
