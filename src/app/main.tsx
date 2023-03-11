import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from '../assets/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from '../assets/Theme'

import './index.css'
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ErrorPage from '../pages/error-page';
import NavBar from '../components/navBar';
import Cart from '../pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar/>
        <Outlet/>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)