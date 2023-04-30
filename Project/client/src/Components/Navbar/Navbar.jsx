import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import img from '../../images/loginwall.jpg'
import './Navbar.css'
import zIndex from '@mui/material/styles/zIndex';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI 
      </Typography>
      <Divider />
      <List>  
        <Link to='/dashboard' style={{color:"#000", textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='test' style={{color:"#000", textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Subjects</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/' style={{color:"#000", textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Tips</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/' style={{color:"#000", textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/' style={{color:"#000", textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', zIndex:"-10"}} className='hello'>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="logo" sx={{ display: 'flex'}}>
            <img src={img} alt="logo" />
            <Typography sx={{textAlign:'center'}}>Brand Name</Typography>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to='/dashboard'>
              <Button sx={{ color: '#fff' }}>
                Dashboard
              </Button>
            </Link>
            <Link to='test'>
              <Button sx={{ color: '#fff' }}>
                Subjects
              </Button>
            </Link>
            <Link to='/'>
              <Button sx={{ color: '#fff' }}>
                Tips
              </Button>
            </Link>
            <Link to='/'>
              <Button sx={{ color: '#fff' }}>
                Profile
              </Button>
            </Link>
            <Link to='/'>
              <Button sx={{ color: '#fff' }}>
                Logout
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
