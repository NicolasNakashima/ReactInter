import { Button } from "@mui/material";
import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    width: 100%;
    height: 101px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 4px;
    background: var(--Main-White, #FFF);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    gap: 24px;
    `
)


export const ContainerInfo = styled.div(
    () => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    `
)

export const UserInfo = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    `
)

export const UserName = styled.h2(
    () => css`
    font-weight: bold;
    color: #5A2D03;
    margin: 0;
    
    `
)

export const UserEmail = styled.h4(
    () => css`
    font-weight: 200;
    margin: 0;
    `
)

export const ColoredRec = styled.div(
    () => css`
    height: 100%;
    width: 15px;
    background-color: #FAC552;
    border-radius: 4px 0 0 4px;
    
    `
)

export const StyledButton = styled(Button)(
    () => css`
    height: 35px;
    align-self: center;
    
    `
)
