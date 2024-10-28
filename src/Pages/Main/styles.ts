import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    margin-bottom: 48px;
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
    
    
    `
)

export const Title = styled.h2(
    () => css`
    font-weight: 500;

    
    
    `
)
