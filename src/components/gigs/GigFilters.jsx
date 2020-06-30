import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import {
  makeStyles,
  OutlinedInput,
  Paper,
  Typography,
  InputAdornment,
} from '@material-ui/core';

import moveIcon from '../../assets/27) Icon-move.svg';
import pinIcon from '../../assets/27) Icon-pin.svg';
import globeIcon from '../../assets/27) Icon-globe.svg';
import colorIcon from '../../assets/27) Icon-color-palette.svg';
import caseIcon from '../../assets/27) Icon-briefcase.svg';

const useStyles = makeStyles((theme) => ({
  filters: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, minmax(125px, 12%))',
    justifyContent: 'space-between',
    columnGap: '1rem',
    overflowX: 'auto',
    padding: '2rem 0',
    '& > *': {
      background: 'none',
      borderColor: 'rgba(0, 0, 0, 0.12)',
      borderRadius: theme.spacing(2),
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      padding: '.7rem',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: theme.spacing(2),
      fontSize: '.7rem',
    },
    '& .MuiPaper-outlined': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiTypography-alignCenter': {
      fontSize: '.7rem',
    },
  },
}));

const GigFilters = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.filters}>
      <Paper variant='outlined'>
        <Typography color='textSecondary' align='center'>
          Freelance
        </Typography>
      </Paper>
      <OutlinedInput
        placeholder='Keywords'
        variant='outlined'
        startAdornment={
          <InputAdornment position='start'>
            <img alt='move icon' src={moveIcon} />
          </InputAdornment>
        }
      ></OutlinedInput>
      <OutlinedInput
        placeholder='Location'
        variant='outlined'
        startAdornment={
          <InputAdornment position='start'>
            <img alt='move icon' src={pinIcon} />
          </InputAdornment>
        }
      ></OutlinedInput>
      <OutlinedInput
        placeholder='Remote friendly'
        variant='outlined'
        startAdornment={
          <InputAdornment position='start'>
            <img alt='move icon' src={globeIcon} />
          </InputAdornment>
        }
      ></OutlinedInput>
      <OutlinedInput
        placeholder='Design'
        variant='outlined'
        startAdornment={
          <InputAdornment position='start'>
            <img alt='move icon' src={colorIcon} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position='end'>
            <CheckIcon />
          </InputAdornment>
        }
      ></OutlinedInput>
      <OutlinedInput
        placeholder='Contract'
        variant='outlined'
        startAdornment={
          <InputAdornment position='start'>
            <img alt='move icon' src={caseIcon} />
          </InputAdornment>
        }
      ></OutlinedInput>
    </div>
  );
};

GigFilters.propTypes = {};

export default GigFilters;
