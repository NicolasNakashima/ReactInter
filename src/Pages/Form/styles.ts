import styled, { css } from "styled-components";

export const Wrapper = styled.div(
    () => css`
    display: flex;
    justify-content: center;
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
    margin-top: 100px;
    `
)


export const Title = styled.p(
    () => css`
    font-size: 23px;
    font-weight: 600;
    color: #384384;

    `
)
