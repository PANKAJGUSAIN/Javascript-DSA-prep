import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './Questions/ThemeContext/themeContext.jsx'
import store from './Questions/TodoRedux/redux/store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
