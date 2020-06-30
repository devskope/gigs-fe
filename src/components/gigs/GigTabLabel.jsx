import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1),
    height: '1.5rem',
    transform: 'translateY(-20%)',
  },
}));

const GigTabLabel = ({ category }) => {
  const classes = useStyles();

  switch (category) {
    case 'mine':
      return (
        <Typography component='span' variant='h6'>
          My gigs{' '}
          <Button color='primary' variant='outlined' className={classes.button}>
            1200
          </Button>
        </Typography>
      );
    case 'rejected':
      return (
        <Typography component='span' variant='h6'>
          Regected gigs{' '}
          <Button color='primary' variant='outlined' className={classes.button}>
            100
          </Button>
        </Typography>
      );
    default:
      return (
        <Typography component='span' variant='h6'>
          All gigs{' '}
          <Button color='primary' variant='outlined' className={classes.button}>
            3404
          </Button>
        </Typography>
      );
  }
};

GigTabLabel.propTypes = {
  category: PropTypes.oneOf(['all', 'mine', 'rejected']),
};

export default GigTabLabel;
