/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import * as S from "./styles";
import { ILoginProps, LoginModal } from "../../components/LoginModal";
import { useSnackbar } from "notistack";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export interface IAuthResponse {
  url_photo: string
  token: string
}

export const Login = () => {
  const [data, setData] = useState<IAuthResponse>({
    url_photo: "",
    token: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  

  const handleLogin = async (values: ILoginProps) => {
    setIsLoading(true);
        try {
      const response = await fetch("https://apikhiata.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.name,
          password: values.password,
        }),
      });

      const responseAPI = await response.json();
      setData(responseAPI);
      localStorage.setItem('username', values.name);
      localStorage.setItem('password', btoa(values.password));
      enqueueSnackbar('Login realizado com sucesso!', { variant: 'success', autoHideDuration: 2000 });
    } catch (error) {
      enqueueSnackbar('Erro ao realizar login. Verifique suas credenciais.', { variant: 'error', autoHideDuration: 2000 });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    } 
  };

  useEffect(() => {
    if (data.token !== "") {
      localStorage.setItem('url_photo', data.url_photo);
      localStorage.setItem('token', data.token);
    }
  }, [data]);

  useEffect(() => {
    if(data.token !== "" && data.url_photo !== "" && !isLoading) {
      navigate('/');
    }
  },[isLoading]);
  

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <LoginModal handleSubmit={handleLogin} />
        </S.Container>
      </S.Wrapper>
      <Loading isLoading={isLoading} fullScreen={true} />
    </>
  );
};
