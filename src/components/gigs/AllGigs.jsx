import React, { useState, useEffect } from 'react';

import GigFilters from './GigFilters';
import {
  Typography,
  List,
  ListItem,
  makeStyles,
  Paper,
  Checkbox,
  Button,
} from '@material-ui/core';

import orderIcon from '../../assets/Group 288.svg';
import { fetchGigs } from '../../requests/gigs';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    padding: '0',
    rowGap: '0.8rem',
  },
  listHeader: {
    gridColumnEnd: 'span 15',
    display: 'grid',
    gridTemplateColumns: 'repeat(15, 1fr)',
    width: '100%',
  },
  listItem: {
    display: 'grid',
    gridColumnEnd: 'span 15',
    gridTemplateColumns: 'repeat(15, 1fr)',
    width: '100%',
  },
  role: {
    display: 'flex',
    alignItems: 'center',
    gridColumnStart: '2',
    gridColumnEnd: 'span 2',
  },
  company: {
    display: 'flex',
    alignItems: 'center',
    gridColumnStart: '5',
    gridColumnEnd: 'span 2',
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    gridColumnStart: '8',
    gridColumnEnd: 'span 2',
  },
  salary: {
    display: 'flex',
    alignItems: 'center',
    gridColumnStart: '11',
    gridColumnEnd: 'span 2',
  },
  delete: {
    display: 'flex',
    alignItems: 'center',
    gridColumnStart: '14',
    marginRight: '1.2rem',
    gridColumnEnd: 'span 2',
  },
}));

const AllGigs = () => {
  const classes = useStyles();
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const gigSnapshot = await fetchGigs();
        setGigs(
          gigSnapshot.docs.map((doc) => {
            const gig = doc.data();
            const date = gig.createdAt.toDate();

            gig.createdAt = `${date.getDate()}, ${new Intl.DateTimeFormat(
              'en-US',
              { month: 'long' }
            ).format(date)} ${date.getFullYear()}`;

            return gig;
          })
        );
      } catch (err) {
        // handle error
      }
    })();
  }, []);

  const headers = [
    { name: 'Role', class: classes.role },
    { name: 'Company', class: classes.company },
    { name: 'Date', class: classes.date, icon: orderIcon },
    { name: 'Salary($)', class: classes.salary, icon: orderIcon },
  ];

  return (
    <>
      <GigFilters />
      <List className={classes.list}>
        <ListItem className={classes.listHeader} disableGutters>
          {headers.map((header) => (
            <Typography className={header.class} variant='caption'>
              {header.name}
              {header.icon && <img alt='order icon' src={orderIcon} />}
            </Typography>
          ))}
        </ListItem>
        {gigs.map((gig) => (
          <ListItem
            component={Paper}
            variant='outlined'
            className={classes.listItem}
            disableGutters
          >
            <Checkbox />
            <Typography className={classes.role} variant='caption'>
              {gig.role}
            </Typography>
            <Typography className={classes.company} variant='caption'>
              {gig.company}
            </Typography>
            <Typography className={classes.date} variant='caption'>
              {gig.createdAt}
            </Typography>
            <Typography className={classes.salary} variant='caption'>
              {gig.minimumSalary} - {gig.maximumSalary}
            </Typography>
            <Button
              className={classes.delete}
              color='primary'
              variant='outlined'
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AllGigs;
