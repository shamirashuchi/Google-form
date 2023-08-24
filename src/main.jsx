import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyModal from './MyModal.jsx';
import Home from './Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: "/home",
        element:<Home></Home>
      },
      {
        path: "/upload",
        element: <MyModal></MyModal>,
      },
    ],
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <div className='bg-base-200'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

