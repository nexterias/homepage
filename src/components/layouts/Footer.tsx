import { SiGithub } from '@icons-pack/react-simple-icons'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto flex justify-between px-8 py-4">
        <small>
          Copyright &copy; {new Date().getUTCFullYear()} The NEXTERIAS
        </small>
        <ul>
          <li>
            <a href="https://github.com/nexterias">
              <SiGithub className="transition-opacity hover:opacity-70" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
