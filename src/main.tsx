import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { Main } from './Pages/Main';
import { Navbar } from './components/Navbar';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <SnackbarProvider>
      <Main />
    </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
