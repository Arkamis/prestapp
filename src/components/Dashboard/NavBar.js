import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Divider from '@material-ui/core/Divider';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    color:{
        background: 'black',
    }
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <Router>
         <div className={classes.root}>
             <AppBar position="static">
                 <Toolbar variant="dense" className={classes.color}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                         {popupState => (
                            <React.Fragment>
                                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" variant="contained" {...bindTrigger(popupState)}>
                                      <MenuIcon />
                                  </IconButton>
                                  <Menu {...bindMenu(popupState)}>
                                     <MenuItem onClick={popupState.close}>
                                            <Link to="/">home</Link>
                                        </MenuItem>
                                        <Divider />
                                       <MenuItem onClick={popupState.close}>
                                         <Link to="/inicio">inicio</Link>
                                       </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={popupState.close}>
                                            <Link to="/registro">Registro</Link>
                                        </MenuItem>
                                  </Menu>
                            </React.Fragment>
                         )}
                        </PopupState>
                        <Typography variant="h6" color="inherit">
                           Taxes
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </Router>
    );
}