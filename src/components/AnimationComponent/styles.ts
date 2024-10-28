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
    font-weight: 600;
    color: #384384;
    
    
    `
)