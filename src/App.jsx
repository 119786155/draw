import { useState, useEffect } from 'react'
import { Excalidraw } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'
import Loading from './Loading.jsx'

function App () {
  const themeDarkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(themeDarkQuery.matches ? 'dark' : 'light')

  themeDarkQuery.addEventListener('change', (mediaQueryListEvent) => {
    setTheme(mediaQueryListEvent.matches ? 'dark' : 'light')
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    loading ? <Loading /> : <Excalidraw theme={theme} />
  )
}

export default App
