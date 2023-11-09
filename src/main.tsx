import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouterProvider } from './routes';
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouterProvider />
  </React.StrictMode>,
)
