import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <Button
        component={Link}
        to='/gigs'
        color='primary'
        size='large'
        variant='outlined'
      >
        gigs
      </Button>
    </div>
  );
};

export default Dashboard;
