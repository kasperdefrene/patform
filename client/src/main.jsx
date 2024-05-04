import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import Root from "./routes/root";
import "./styles/style.css";
import Index from "./routes";
import ErrorPage from "./routes/error-page";
import CreateArtwork from "./routes/createArtwork";
import ArtworkDetail from "./routes/artworkDetail";
import Login from "./routes/auth/login";
import destroyAction from './routes/destroy';
import Register from './routes/auth/register';
import Profile from './routes/auth/profile';
import User from './routes/user';

import { removeAuthData } from "./services/auth";


const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
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
        path: "/auth/profile",
        element: <Profile />,
        loader: Profile.loader,
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
      {
        path: "/user/:id",
        element: <User />,
        loader: User.loader,
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
