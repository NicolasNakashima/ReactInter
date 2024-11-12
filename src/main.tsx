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
import { Login } from './Pages/Login';
import AppLayout from './components/AppLayout';
import { NotFound } from './Pages/NotFound';
import { DashboardFair } from './Pages/DashboardFair';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <CssBaseline>
    <SnackbarProvider>
      {/* Rotas livre para tráfego */}
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path='/user/formulario' element={<Form/>}/>
      </Routes>
    </SnackbarProvider>
    <Navbar />
      <SnackbarProvider>
        {/* Rotas que necessitam autenticação */}
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route element={<AppLayout/>}>
            <Route path="/" element={<Main />} />
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            <Route path='/admin/formulario' element={<Form/>}/>
            <Route path='/admin/avaliacao-projeto' element={<DashboardFair/>}/>
          </Route>
        </Routes>
      </SnackbarProvider>
    </CssBaseline>
    </BrowserRouter>
  </StrictMode>
);
