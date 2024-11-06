import styled, { css } from "styled-components";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
 
export const Wrapper = styled.div(
  () => css`
    display: flex;
    border-radius: 0.5rem;
    width: 30rem;
    height: 30rem;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #fff;
    background-color: #fff;
    margin: 2rem;
  `
);

 
export const TextFieldStyled = styled(TextField)(
  () => css`
    width: 90%;
  `
);
 
export const ButtonStyled = styled(Button)(
  () => css`
    width: 90%;
    margin-top: 2rem;
    background: rgb(250,197,82);
    background: linear-gradient(90deg,
         rgba(250,197,82,1) 0%,
          rgba(255,193,0,1) 50%,
           rgba(252,138,43,1) 100%);
  `
);
 
export const StyledTitle = styled.h1(
  () => css`
    color: black;
  `
);