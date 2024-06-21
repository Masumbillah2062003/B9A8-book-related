import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Toaster } from 'react-hot-toast';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import ListedBooks from './Pages/Listed_Books/ListedBooks';
import PagesToRead from './Pages/Pages_to_Read/PagesToRead';
import BookDetails from './Components/BookDetails';
import ReadBook from './Components/ReadBook';
import WishList from './Components/WishList';
import ErrorControl from './Components/ErrorControl';
import Contact_Me from './Pages/Contact_Me/Contact_Me';
import About_me from './Pages/About_me/About_me';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorControl></ErrorControl>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/bookList.json')
      },
      {
        path: "/book/:id",
        element:<BookDetails></BookDetails>,
        loader: () => fetch("/bookList.json"),
        
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element:<ReadBook></ReadBook>
          },
          {
            path:"wishlist",
            element: <WishList></WishList>
          },
        ]
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/contactme",
        element: <Contact_Me></Contact_Me>
      },
      {
        path: "/aboutme",
        element: <About_me></About_me>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)