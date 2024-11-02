import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import { Main } from './Pages/Main';
import { Navbar } from './components/Navbar';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';
import { Dashboard } from './Pages/Dashboard';
import { Form } from './Pages/Form';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <CssBaseline>
    <Navbar />
    <SnackbarProvider>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/formulario' element={<Form/>}></Route>
      </Routes>
    </SnackbarProvider>
    </CssBaseline>
    </BrowserRouter>
  </StrictMode>
);
