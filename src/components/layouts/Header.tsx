import { SiGithub } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow dark:bg-black dark:shadow-slate-600">
      <nav className="container mx-auto flex items-center justify-between px-8 py-2">
        <Link href="/">
          <img
            className="h-10 w-10 transition-opacity hover:opacity-70"
            src="/logo.svg"
            alt="The NEXTERIAS"
          />
        </Link>
        <ul className="flex">
          <li>
            <a href="https://github.com/nexterias">
              <SiGithub className="h-8 w-8 transition-opacity hover:opacity-70" />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
