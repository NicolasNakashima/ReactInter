import styled, { css } from "styled-components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    position: fixed;
    flex-direction: row;
    height: 6rem;
    background-color: #FAC552;
    box-shadow:  5px 5px 10px #c7c7c7,
             -5px -5px 10px #f9f9f9;
    align-items: center;
    padding: 0 3rem;
    justify-content: center;
    z-index: 1;
    width: 100%;
    
    `
    
)

export const Container = styled.div(
    () => css`

    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
    
    
    `
)

export const Info = styled.div(
    () => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;


    h2 {
        margin: 0;
        color: #5A2D03;

    }
    
    `
)

export const StyledKeyboardBackspaceIcon = styled(KeyboardBackspaceIcon)(
    () => css`
    color: #5A2D03;
    cursor: pointer;
    `
)

export const StyledMenuIcon = styled(MenuIcon)(
    () => css`
    color: #5A2D03;
    cursor: pointer;
    `
)


export const UserImage = styled.div(
    () => css`
    display: flex;
    background-color: black;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: 1px solid white;
    cursor: pointer;
    justify-content: center;

     img {
        border-radius: 50%;
     }
    
    
    
    `
)

export const StyledBox = styled(Box)(
    () => css`
    margin: 5px;
    width: 300px;
    display: flex;
    flex-direction: column;
    
    `
)


export const MenuName = styled.h2(
    () => css`
    padding: 0 1rem;
    
    `
)


