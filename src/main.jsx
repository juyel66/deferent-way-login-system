import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root/Root';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import AnotherLogin from './componets/AnotherLogin/AnotherLogin';
import SuccessLogin from './componets/SuccessLogin/SuccessLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path: "/anotherLogin",
        element: <AnotherLogin></AnotherLogin>
      },
      {
        path: "/success",
        element: <SuccessLogin></SuccessLogin>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
