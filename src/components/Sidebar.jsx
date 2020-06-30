import React from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  makeStyles,
  useTheme,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/Group 493.png';
import homeIcon from '../assets/27) Icon-home-fill.svg';
import gigsIcon from '../assets/27) Icon-briefcase.svg';
import gigsIconActive from '../assets/27) Icon-briefcase-fill.svg';
import companyIcon from '../assets/27) Icon-npm-fill.svg';
import accountIcon from '../assets/27) Icon-person-fill.svg';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    borderRightColor: '#ECECEC',
    height: '100%',
  },
  nav: {
    display: 'grid',
    gap: '1rem',
  },
  logo: {
    paddingLeft: '10%',
    height: '6rem',
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Paper className={classes.sidebar}>
      <List className={classes.nav}>
        <ListItem className={classes.logo}>
          <img alt='logo' src={logo} />
        </ListItem>
        <ListItem component={Link} to='/'>
          <ListItemIcon>
            <Icon>
              <img alt='home icon' src={homeIcon} />
            </Icon>
          </ListItemIcon>
          <ListItemText
            style={{
              color: pathname === '/' && theme.palette.primary.main,
            }}
          >
            Dashboard
          </ListItemText>
        </ListItem>

        <ListItem component={Link} to='/gigs'>
          <ListItemIcon>
            <Icon>
              <img
                alt='gigs icon'
                src={pathname.includes('/gigs') ? gigsIconActive : gigsIcon}
              />
            </Icon>
          </ListItemIcon>
          <ListItemText
            style={{
              color: pathname.includes('/gigs') && theme.palette.primary.main,
            }}
          >
            Gigs
          </ListItemText>
        </ListItem>

        <ListItem component={Link} to='/company'>
          <ListItemIcon>
            <Icon>
              <img alt='company icon' src={companyIcon} />
            </Icon>
          </ListItemIcon>
          <ListItemText>Company</ListItemText>
        </ListItem>

        <ListItem component={Link} to='/account'>
          <ListItemIcon>
            <Icon>
              <img alt='account icon' src={accountIcon} />
            </Icon>
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
};

export default Sidebar;
