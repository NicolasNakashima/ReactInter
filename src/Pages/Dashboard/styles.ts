import styled, { css } from 'styled-components'

export const Wrapper = styled.div(
    () => css`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    margin-bottom: 48px;
    align-content: center;
    padding: 0 3rem;

    iframe {
        width: 100%;
        height: 520px;
        border: 0;
    }

    
    
    `
)