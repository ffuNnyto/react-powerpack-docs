import './../app/globals.css';
import 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react'
import ReactDOM from 'react-dom/client'
import PageHome from './pages/home.tsx'
import { ThemeProvider } from './components/theme-provider.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageResources from './pages/components.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<PageHome />} />
          <Route path='/components/*' element={<PageResources />} />
          <Route path='/hooks/*' element={<PageResources />} />
          {/**<Route path='/components/*' element={<PageHooks />} /> */}



        </Routes>
      </BrowserRouter>

    </ThemeProvider>

  </React.StrictMode>,
)
