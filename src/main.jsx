import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Button from '@mui/material/Button';


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#81D4FA',
          color: '#000',
          '&:hover': {
            backgroundColor: '#81D4FA',
          },
          fontWeight: 'medium',
          fontSize: '',
          padding: '5px 18px',
          borderRadius: '8px',
          textTransform: 'capitalize',
          fontFamily: 'Poppins',
          
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
