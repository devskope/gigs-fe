import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';

import GigHeader from '../../components/gigs/GigHeader';
import GigForm from '../../components/gigs/GigForm.jsx';
import { createGig } from '../../requests/gigs';

const useStyles = makeStyles((theme) => ({
  formArea: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    height: 'calc(100% - 7rem)',
    padding: theme.spacing(0, 10, 0, 6),
  },
  formHeader: {
    padding: '1.5rem 0',
  },
}));

const CreateGig = () => {
  const classes = useStyles();

  const create = async (data) => {
    try {
      const gigRef = await createGig(data);
      console.log(gigRef);
      const gig = await gigRef.get();
      console.log(gig.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <GigHeader />
      <div className={classes.formArea}>
        <Typography className={classes.formHeader} component='h1' variant='h5'>
          New gig
        </Typography>
        <GigForm mode='create' onSubmit={create} />
      </div>
    </div>
  );
};

export default CreateGig;
