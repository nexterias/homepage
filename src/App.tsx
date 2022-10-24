import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter, AppHeader } from './components'

export const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <AppFooter />
    </>
  )
}
