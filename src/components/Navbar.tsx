import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
// import images from '../resources/ts/images';

interface Props {
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const pages = ['Top', 'Gallery', 'Contact'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <HideOnScroll>
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {/* <Box sx={{ flexGrow: 0, paddingRight: '1rem' }}>
                        <Tooltip title="Hi!">
                            <Avatar alt="Andrew Huntington" src={images.myPic} />
                        </Tooltip>
                    </Box> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            {`<ah>`}
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            {`<ah>`}
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'end',
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) =>
                                    page === 'Contact' ? (
                                        <MenuItem
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                backgroundColor: deepPurple[500],
                                                transition: '0s background-color ease-out',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(104, 58, 183, 0.65)',
                                                    transitionDelay: '0.1s',
                                                },
                                            }}
                                        >
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ) : (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    )
                                )}
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'end',
                            }}
                        >
                            {pages.map((page) =>
                                page === 'Contact' ? (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            mx: 2,
                                            px: 2.5,
                                            color: 'white',
                                            display: 'block',
                                            backgroundColor: deepPurple[500],
                                            transition: '0s background-color ease-out',
                                            '&:hover': {
                                                backgroundColor: 'rgba(104, 58, 183, 0.65)',
                                                transitionDelay: '0.1s',
                                            },
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ) : (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            mx: 2,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {page}
                                    </Button>
                                )
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
}
export default ResponsiveAppBar;
