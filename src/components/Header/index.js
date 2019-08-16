import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  title: { flexGrow: 1 }
}))

function Header(props){
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleMenuClick = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleChangePasswordClick = () => props.history.push("/changePassword");

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} noWrap>ARCrawler</Typography>
        <IconButton color="inherit" onClick={handleMenuClick}>
          <AccountCircle/>
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleChangePasswordClick}>Change Password</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header);