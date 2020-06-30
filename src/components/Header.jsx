import React from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  fade,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import notificationIcon from '../assets/Group 140.svg';
import mailIcon from '../assets/27) Icon-email.svg';
import settingsIcon from '../assets/27) Icon-settings.svg';
import avatar from '../assets/Rectangle 13.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    height: '100%',
    border: 'none',
  },
  toolBar: {
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(0, 6),
  },
  search: {
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: theme.spacing(2),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    height: '1.6rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
  menuIcons: {
    display: 'flex',
    width: '30%',
    maxWidth: '300px',
    justifyContent: 'space-between',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appBar}
        variant='outlined'
        color='transparent'
        position='relative'
      >
        <Toolbar className={classes.toolBar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              placeholder='Search…'
            />
          </div>

          <div className={classes.grow} />

          <div className={classes.menuIcons}>
            <img alt='notification icon' src={notificationIcon} />
            <img alt='mail icon' src={mailIcon} />
            <img alt='settings icon' src={settingsIcon} />
            <img alt='avatar icon' src={avatar} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
