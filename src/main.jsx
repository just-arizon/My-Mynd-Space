import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {NextUIProvider} from '@nextui-org/react'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Button from '@mui/material/Button';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
