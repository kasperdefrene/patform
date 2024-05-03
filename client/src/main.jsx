import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./styles/style.css";
import Index from "./routes";
import ErrorPage from "./routes/error-page";
import CreateArtwork from "./routes/createArtwork";
import ArtworkDetail from "./routes/artworkDetail";
import Login from "./routes/auth/login";
import MyArtworks from './routes/myArtworks';
import destroyAction from './routes/destroy';
import Register from './routes/auth/register';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Root />,
    loader: Root.loader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index />, loader: Index.loader },
      {
        path: '/artwork/create',
        element: <CreateArtwork />,
        action: CreateArtwork.action,
        loader: CreateArtwork.loader,
      },
      {
        path: '/artwork/my-artworks',
        element: <MyArtworks />,
      },
      {
        path: '/artwork/detail/:id',
        element: <ArtworkDetail />,
        loader: ArtworkDetail.loader,
      },
      {
        path: '/auth/login',
        element: <Login />,
        action: Login.action,
        loader: Login.loader,
      },
      {
        path: "/auth/register",
        element: <Register />,
        action: Register.action,
      },
      {
        path: "/auth/logout",
        action: async () => {
          removeAuthData();
          return redirect("/");
        },
      },
      {
        path: "artwork/detail/:id/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
