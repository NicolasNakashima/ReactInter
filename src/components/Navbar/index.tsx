import { Avatar, Box, Drawer, IconButton, List, ListItem, ListItemButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
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
        {name: 'Avalição do Projeto', path: '/admin/avaliacao-projeto'},
    ]
    const userMenu = ['Logout'];

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      const handleLogout = () => {
        localStorage.clear();
        navigate('/login'); 
      };

    if (location.pathname === '/user/formulario' || location.pathname === '/login') {
        return null; 
      }


    
    return (
        <S.Wrapper>
            <S.Container>
            <S.Info>
            <S.StyledMenuIcon fontSize="large" onClick={() => setOpenDrawer(true)}/>
                <h2>Área Restrita</h2>
            
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title={localStorage.getItem('username')}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {
                        localStorage.getItem('url_photo') 
                        ? 
                        <Avatar sx={{ width: '2rem' , height: '2rem', cursor: 'pointer'}} src={localStorage.getItem('url_photo') ?? ''}/>
                        :
                        <Avatar sx={{ width: '2rem' , height: '2rem', bgcolor: deepOrange[500], cursor: 'pointer'}}>{String(username[0]).toUpperCase()}</Avatar>
                        }
                        
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {userMenu.map((value) => (
                        <MenuItem key={value} onClick={() => {
                            handleCloseUserMenu();
                            if (value === 'Logout') {
                                handleLogout();
                            }
                        }}>
                        <Typography sx={{ textAlign: 'center' }}>{value}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
            
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