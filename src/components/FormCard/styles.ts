import styled, { css } from "styled-components";

export const Wrapper = styled.div(
    () => css`

    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--Main-White, #FFF);
    border-radius: 4px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    gap: 10px;
    padding: 30px 35px;
    `
)


export const Title = styled.p(
    () => css`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    `
)