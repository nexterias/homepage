import React from 'react'

export const useMediaQuery = (query: string) => {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)

    setValue(media.matches)

    const handler = (event: MediaQueryListEvent) => {
      setValue(event.matches)
    }

    media.addEventListener('change', handler)

    return () => media.removeEventListener('change', handler)
  }, [query])

  return value
}
