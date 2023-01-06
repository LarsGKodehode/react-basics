// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// If you have stylesheets that you want to have accessible throughout your application import them here
import './styles/overrides.css'
import './styles/palettes.css'
import './styles/classes.css'


// Avoid thouching the lines below, they are for setting up React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
