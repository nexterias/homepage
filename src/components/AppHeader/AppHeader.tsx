import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { useMediaQuery } from '../../hooks'
import { darkModeState } from '../../atoms'
import { Logo } from '../Logo'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/20/solid'

const headerLinks: ReadonlyArray<Record<'name' | 'to', string>> = [
  {
    name: 'Members',
    to: '/members',
  },
  {
    name: 'Projects',
    to: '/projects',
  },
]

export const AppHeader: React.FC = () => {
  const [isDarkTheme, setDarkTheme] = useRecoilState(darkModeState)
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    <header className="sticky top-0 divide-y-4 bg-slate-100/80 backdrop-blur dark:bg-slate-800/80">
      <div className="mx-auto flex max-w-5xl items-center space-x-4 px-4 py-2 sm:space-x-0">
        <nav className="flex-1 items-center sm:flex sm:space-x-4">
          <Link to="/" className="transition-opacity hover:opacity-60 sm:pr-4">
            <Logo className="h-12 w-12 fill-black stroke-black dark:fill-white dark:stroke-white" />
            <span className="sr-only">NEXTERIAS</span>
          </Link>
          {!isMobile &&
            headerLinks.map(({ name, to }) => (
              <NavLink
                className={active =>
                  clsx(
                    'font-semibold motion-safe:transition-opacity',
                    active.isActive ? 'opacity-75' : 'hover:opacity-75'
                  )
                }
                to={to}
                key={name}
              >
                {name}
              </NavLink>
            ))}
        </nav>
        {isMobile && (
          <Menu className="relative inline-flex justify-center" as="div">
            <Menu.Button className="transition-opacity hover:opacity-75">
              <Bars3Icon className="h-8 w-8" />
              <span className="sr-only">Menu</span>
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute top-8 right-8 w-[45vw] origin-top-right rounded-md bg-white shadow-lg dark:bg-slate-700">
                <div className="space-y-2 p-2">
                  {headerLinks.map(({ name, to }) => (
                    <Menu.Item key={name}>
                      <NavLink
                        className={({ isActive }) =>
                          clsx(
                            'inline-block w-full text-lg text-black dark:text-white',
                            isActive && 'text-opacity-70 dark:text-opacity-50'
                          )
                        }
                        to={to}
                      >
                        {name}
                      </NavLink>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
        <button
          className="transition-opacity hover:opacity-75"
          onClick={() => setDarkTheme(it => !it)}
        >
          {isDarkTheme ? (
            <SunIcon className="h-8 w-8" />
          ) : (
            <MoonIcon className="h-8 w-8" />
          )}
          <span className="sr-only">{`${
            isDarkTheme ? 'Disable' : 'Enable'
          } Dark mode`}</span>
        </button>
      </div>
    </header>
  )
}
