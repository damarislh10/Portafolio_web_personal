import React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/navBar.css";
import { List } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const Navbar = ({ id }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const links = [
    {
      id: "about",
      text: "Perfil",
      icon: <PersonIcon />,
    },
    {
      id: "skills",
      text: "Habilidades",
      icon: <TipsAndUpdatesIcon />,
    },
    {
      id: "certifications",
      text: "Certificaciones",
      icon: <WorkspacePremiumIcon />,
    },
    {
      id: "mywork",
      text: "Proyectos",
      icon: <BuildIcon />,
    },
    {
      id: "contact",
      text: "Contactame",
      icon: <ContactMailIcon />,
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="container-nav">
        <Toolbar disableGutters className="contaner-li">
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar position="fixed" open={open} className="container-nav">
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Main open={open}>
                <DrawerHeader />
              </Main>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                  },
                }}
                variant="persistent"
                anchor="right"
                open={open}
              >
                {/* menu hamburguer */}
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </DrawerHeader>
                <Divider />
                <List className="classesmenu">
                  {links.map(({ id, text, icon }, index) => (
                    <ListItem button key={index}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <Link
                        className="link-menunav"
                        key={index}
                        to={id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        <ListItemText />
                        {text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Box>

            {/* </Menu> */}
          </Box>
          <Box
            className="li-nav"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {links.map(({ id, text }, index) => (
              <Button
                key={index}
                className="buttonPages"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                <Link
                  key={index}
                  to={id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {text}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
