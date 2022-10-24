import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import { App } from './App'
import { NotFound } from './pages/NotFound'
import { RecoilRoot } from 'recoil'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
