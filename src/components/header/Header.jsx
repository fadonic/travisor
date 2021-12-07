import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'

const Header = () => {

  const classes = useStyles()
  return (
    <AppBar position="static" style={{background:'purple'}}>
      <Toolbar className={classes.toolbar}>
           <Typography varient="h3" className={classes.title}>
             Travisor
           </Typography>
           <Box display="flex" alignItems="center">
            <Typography varient="h6">
              Are your looking for New Places ?
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>
                  <div  className={classes.searchIcon}>
                   <SearchIcon />
                  </div>
                  <InputBase placeholder="Search" classes={{root:classes.inputRoot, input:classes.inputInput}}/>
              </div>
            {/* </Autocomplete> */}
           </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;