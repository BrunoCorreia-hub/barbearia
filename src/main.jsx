import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { standardThemes } from './styles/themes/standardThemes.js'
import GlobalStyle from './styles/GlobalStyles.js'
import BarberRoutes from './routes/route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardThemes}>
      <GlobalStyle />
      <BarberRoutes />
    </ThemeProvider>
  </StrictMode>,
)
