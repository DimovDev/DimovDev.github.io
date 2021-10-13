import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import Particles from "./components/Particless/Particless";



render(
  <ThemeProvider>

    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
