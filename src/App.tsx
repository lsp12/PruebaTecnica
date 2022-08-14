import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { useAppSelector } from './app/hooks'
import { Home } from './modules/home/pages/Home'

function App() {
  const { theme } = useAppSelector((state) => state.ui)
  const darkTheme = createTheme({
    palette: {
      mode: (theme as PaletteMode) || 'light',
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
