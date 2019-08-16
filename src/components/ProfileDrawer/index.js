import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { KeyboardBackspace as BackIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  drawer: { width: 180, flexShrink: 0 },
  drawerPaper: { width: 180 },
  toolbar: theme.mixins.toolbar
}))

function ProfileDrawer(){
  const classes = useStyles();
  return(
    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar}/>
      <List>
        <ListItem button>
          <ListItemIcon>
            <BackIcon/>
          </ListItemIcon>
          <ListItemText primary="Back to Dashboard"/>
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Change Password"/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withRouter(ProfileDrawer);