import styled, { css } from "styled-components";
 
export const Wrapper = styled.div(
  () => css`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(250,197,82);
background: linear-gradient(90deg,
     rgba(250,197,82,1) 0%,
      rgba(255,193,0,1) 50%,
       rgba(252,138,43,1) 100%);
    
  `
);

export const Container = styled.div(
    () => css`
    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    `
)