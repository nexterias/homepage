import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-3xl font-semibold leading-loose">
          ページが存在しません。
        </p>
      </div>
      <div className="mt-4">
        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:opacity-80"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  )
}
