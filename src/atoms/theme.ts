import { atom, AtomEffect } from 'recoil'

const fetchLocalStorage: AtomEffect<boolean> = ({ setSelf, onSet }) => {
  const key = 'dark_mode'
  const savedValue = localStorage.getItem(key)
  const initialValue = savedValue
    ? !!JSON.parse(savedValue)
    : window.matchMedia('(prefers-color-scheme: dark)').matches

  setSelf(initialValue)
  document.documentElement.classList.toggle('dark', initialValue)

  onSet((newValue, _, isReset) => {
    if (isReset) {
      localStorage.removeItem(key)
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
      document.documentElement.classList.toggle('dark', newValue)
    }
  })
}

export const darkModeState = atom<boolean>({
  default: false,
  key: 'dark-mode',
  effects: [fetchLocalStorage],
})
