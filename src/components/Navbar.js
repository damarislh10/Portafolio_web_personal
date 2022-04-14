import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/navBar.css";
import { List } from "@mui/material";

export const Navbar = ({ id }) => {
  const links = [
    {
      id: "about",
      text: "Perfil",
    },
    {
      id: "skills",
      text: "Habilidades",
    },
    {
      id: "certifications",
      text: "Certificaciones",
    },
    {
      id: "mywork",
      text: "Proyectos",
    },
    {
      id: "contact",
      text: "Contactame",
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="container-nav">
        <Toolbar disableGutters className="contaner-li">
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List className="classesmenu">
                {
                  links.map(({id,text},index)=>(
                    <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70}>{text}</Link>
                  ))
                }
              </List>
       
            </Menu>
          </Box>
          <Box
            className="li-nav"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
                      {/* <List className="classesmenu">
                {
                  links.map(({id,text},index)=>(
                    <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70}>{text}</Link>
                  ))
                }
              </List> */}
            {links.map(({id,text},index)=>(
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                className="buttonPages"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                   <Link key={index} to={id} spy={true} smooth={true} duration={500} offset={-70}>{text}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


