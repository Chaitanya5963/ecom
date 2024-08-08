import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText, Collapse } 
    from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ExpandMore } from '@mui/icons-material';
import ContentView from './ContentView';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0.8),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    backgroundColor: '#f1f2f6',
    overflow: 'hidden',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: '#fff',
  color: '#1976d2',
  boxShadow: '0 0 1px #000',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: '#f1f2f6',
}));

const Home = () => {

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [contentViewData, setContentViewData] = React.useState("Dashboard");
  const handleContentView = (data) => setContentViewData(data);

  const [openList, setOpenList] = React.useState({});
  const handleClick = (item) => setOpenList((prevOpen) => ({ ...prevOpen, [item]: !prevOpen[item] }));

  const servicesList = {
    Department: ['Department'],
    Designation: ['Designation'],
    Employee: ['Employee', 'Employee Technology'],
    Technology: ['Technology'],
    Client: ['Client', 'ContactType', 'ClientContact'],
    Project: ['Project', 'Project Employee', 'Project Technology'],
    SOW: ['SOW', 'SOWStatus', 'SOWRequirement', 'SOWProposedTeam'],
    Interviews: ['Interviews', 'InterviewStatus'],
    Webinars: ['Webinars'],
    Blogs: ['Blogs']
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">Organization</Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          backgroundColor: '#f1f2f6',
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{position: 'sticky', top: 0, zIndex: 1, boxShadow: '0 0.5px 1px gray'}}>
          <Typography sx={{ml: '10px', fontWeight: 'bold' }}>Services</Typography>
          <Box flexGrow={1}></Box>
          <IconButton onClick={handleDrawerClose} sx={{color: '#1976d2'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{
          // overflow: 'scroll',
          // '&::-webkit-scrollbar': {
          //   display: 'none',
          // },
          // '-ms-overflow-style': 'none',
          // 'scrollbar-width': 'none',
        }}>
          <List>
            <ListItem button onClick={() => handleContentView("Dashboard")}>
              <ListItemText sx={{pl: 3}} primary="Dashboard" />
            </ListItem>
            {Object.entries(servicesList).map(([key, value]) => (
              <React.Fragment key={key}>
                <ListItem button onClick={() => handleClick(key)} >
                  {openList[key] ? <ExpandMore sx={{color: '#1976d2'}}/> : <ChevronRightIcon sx={{color: '#1976d2'}}/>}
                  <ListItemText primary={key} />
                </ListItem>
                <Collapse in={openList[key]} timeout="auto" unmountOnExit >
                  <List component="div" sx={{ backgroundColor: '#f1f2f6', py: 0 }}>
                    {value.map((val, index) => (
                      <ListItem button sx={{ pl: 3.3, py: 0, my: 0 }} key={index} onClick={() => handleContentView(val)}>
                        <ListItemText primary={val} sx={{pl: 2, borderLeft : '2px solid #1976d2'}} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ContentView props={contentViewData} />
      </Main>
    </Box>
  )
}

export default Home;
