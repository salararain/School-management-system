import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/store'
import './style.css'
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
