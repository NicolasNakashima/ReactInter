import { Avatar, Drawer, List, ListItem, ListItemButton } from "@mui/material"
import * as S from "./styles"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";


export const Navbar = () => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const username = localStorage.getItem('username') || '';
    const navigate = useNavigate()

    const MenuOptions = [
        {name: 'Home', path: '/'},
        {name: 'Dashboard', path: '/admin/dashboard'},
        {name: 'Formulário', path: '/admin/formulario'},
    ]


    
    return (
        <S.Wrapper>
            <S.Container>
            <S.Info>
            <S.StyledMenuIcon fontSize="large" onClick={() => setOpenDrawer(true)}/>
                <h2>Área Restrita</h2>
            
                {localStorage.getItem('url_photo')
                ? 
                <Avatar sx={{ width: '2rem' , height: '2rem', cursor: 'pointer'}} src={localStorage.getItem('url_photo') ?? ''}/>
                :
                <Avatar sx={{ width: '2rem' , height: '2rem', bgcolor: deepOrange[500], cursor: 'pointer'}}>{String(username[0]).toUpperCase()}</Avatar>
                }
            
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
                                    onClick={() => {
                                        navigate(item.path);
                                        setOpenDrawer(false);
                                    }}
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