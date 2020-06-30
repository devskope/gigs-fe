import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Paper, Button, Typography, makeStyles } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    background: 'transparent',
    border: 'none',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '7rem',
    padding: theme.spacing(0, 10, 0, 6),
  },
  text: {
    transform: 'translateY(-20%)',
    fontSize: '2.5rem',
    fontWeight: 600,
  },
}));

const GigHeader = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Paper className={classes.header} variant='outlined' square>
      <Typography className={classes.text} component='h1'>
        Gigs
      </Typography>
      {pathname === '/gigs' && (
        <Button
          component={Link}
          to='/gigs/new'
          color='primary'
          variant='contained'
          size='large'
          endIcon={<AddIcon />}
        >
          New gig
        </Button>
      )}
    </Paper>
  );
};

GigHeader.propTypes = {};

export default GigHeader;
