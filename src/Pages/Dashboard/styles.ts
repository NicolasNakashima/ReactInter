import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
    () => css`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 3rem;
    
    `
)


export const Container = styled.div(
  () => css`
    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-top: 150px;
    margin-bottom: 48px;

    iframe {
      width: 100%;
      height: 520px;
      border: 0;
    }

    /* Quando a tela for menor que 650px */
    @media screen and (max-width: 650px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000; /* Para garantir que o iframe fique acima de outros elementos */

      iframe {
        width: 100vw; /* Ocupa toda a largura da viewport */
        height: 100vh; /* Ocupa toda a altura da viewport */
      }
    }
  `
);
