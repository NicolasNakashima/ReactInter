import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { Main } from './Pages/Main';
import { Navbar } from './components/Navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Main />
    </BrowserRouter>
  </StrictMode>
);
