import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.tsx'
import './../app/globals.css';
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageComponents from './pages/components.tsx';
import PageHooks from './pages/hooks.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<Home />} />
          <Route path='/components/*' element={<PageComponents />} />
          <Route path='/hooks/*' element={<PageHooks />} />



        </Routes>
      </BrowserRouter>

    </ThemeProvider>

  </React.StrictMode>,
)
