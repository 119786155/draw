import { useState } from 'react'
import { Excalidraw } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'

function App () {
  const themeDarkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(themeDarkQuery.matches ? 'dark' : 'light')

  themeDarkQuery.addEventListener('change', (mediaQueryListEvent) => {
    setTheme(mediaQueryListEvent.matches ? 'dark' : 'light')
  })

  return (
    <Excalidraw theme={theme} />
  )
}

export default App
