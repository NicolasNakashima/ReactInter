/* eslint-disable @typescript-eslint/no-unused-vars */
// AppLayout.tsx
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { IAuthResponse } from "../../Pages/Login";
import { Outlet, useNavigate } from "react-router-dom";


const AppLayout = () => {
  const [data, setData] = useState<IAuthResponse>({
    token: "",
    url_photo: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const fetchToken = async () => {
    try {
      const response = await fetch("https://apikhiata.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem('username'),
          password: atob(String(localStorage.getItem('password'))),
        }),
      });

      if(response.status !== 200){
        throw new Error("Falha ao recarregar o token");
      }

      const newData = await response.json();
      setData(newData);
      localStorage.setItem("token", newData.token);
      localStorage.setItem("url_photo", newData.url_photo);
      enqueueSnackbar('Validação do Token realizada com sucesso!', { variant: 'success', autoHideDuration: 2000 });
    } catch (error) {
      enqueueSnackbar('Erro ao validar o token. Verifique suas credenciais.', { variant: 'error', autoHideDuration: 2000 });
      console.error("Error:", error);
      setData({ token: "", url_photo: "" });
      localStorage.clear();
      navigate('/login');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchToken();
    const intervalId = setInterval(fetchToken, 3 * 60 * 1000); // Atualiza o token a cada 3 minutos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AppLayout;
