import { Drawer, List, ListItem, ListItemButton } from "@mui/material"
import * as S from "./styles"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    const MenuOptions = [
        {name: 'Home', path: '/'},
        {name: 'Dashboard', path: '/dashboard'},
    ]

    const navigate = useNavigate()

    
    return (
        <S.Wrapper>
            <S.Container>
            <S.Info>
            <S.StyledMenuIcon fontSize="large" onClick={() => setOpenDrawer(true)}/>
                <h2>Área Restrita</h2>
            <S.UserImage/>
            </S.Info>
            </S.Container>

            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <S.StyledBox>
                    <S.MenuName>Menu</S.MenuName>
                    <List>
                        {MenuOptions.map((item) => (
                            <ListItem key={item.name} disablePadding>
                                 <ListItemButton
                                    divider
                                    onClick={() => navigate(item.path)}
                                    >
                                    <h3>{item.name}</h3>
                                    </ListItemButton>
                                </ListItem>
                        ))}
                    </List>
                </S.StyledBox>
                
            </Drawer>
        </S.Wrapper>
        
    )
}