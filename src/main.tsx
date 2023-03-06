import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import './index.css'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage title="Home"></HomePage>,
    errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <ShopPage title="Shop"></ShopPage>,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
