import { useState } from "react";
import * as S from "./styles";

export interface ILoginProps {
  name: string;
  password: string;
}
export interface IDataProps {
  handleSubmit: (values: ILoginProps) => void;
}

const LoginModal = ({ handleSubmit }: IDataProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.Wrapper>
      <S.StyledTitle>Khiata - Admin</S.StyledTitle>
      <S.TextFieldStyled
        label="Digite seu usuário"
        variant="standard"
        onChange={(e) => setName(e.target.value)} 
      />
      <S.TextFieldStyled
        label="Digite sua senha"
        variant="standard"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.ButtonStyled
        color="inherit"
        onClick={() => {
          handleSubmit({ name, password });
        }}
      >
        Login
      </S.ButtonStyled>
    </S.Wrapper>
  );
};

export { LoginModal };
