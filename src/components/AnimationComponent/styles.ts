import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
)

export const Message = styled.h1(
    () => css`
    font-size: 32px;
    font-weight: 700;
    color: #5A2D03;
    margin: 0;
    
    
    `
)