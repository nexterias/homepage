import { ArrowPathIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter, AppHeader } from './components'

const Loading: React.FC = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center space-x-2 px-4">
      <ArrowPathIcon className="h-12 w-12 animate-spin" />
      <span className="text-2xl">Loading...</span>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen">
        <React.Suspense fallback={<Loading />}>
          <Outlet />
        </React.Suspense>
      </main>
      <AppFooter />
    </>
  )
}

export default App
