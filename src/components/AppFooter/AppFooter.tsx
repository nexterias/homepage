import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const AppFooter: React.FC = () => {
  return (
    <footer className="bg-slate-300/80 dark:bg-slate-800/80">
      <div className="flex flex-col items-center justify-center p-4">
        <ul>
          <li>
            <a href="https://github.com/NEXTERIAS">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-6 w-6 transition-opacity hover:opacity-70"
              />
            </a>
          </li>
        </ul>
        <small>Copyright © {new Date().getFullYear()} The NEXTERIAS</small>
      </div>
    </footer>
  )
}
