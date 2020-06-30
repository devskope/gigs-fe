import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { Link } from 'react-router-dom';
import { validateGigData } from '../../lib/utils/validators';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'grid',
    gridTemplateColumns: '275px minmax(450px, 700px)',
    columnGap: '2rem',
  },
  formSteps: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '20px',
    height: '12rem',
    padding: '2rem 2rem',
    boxShadow: '0px 30px 50px #0000000D',
    border: '1px solid #F6F6F6',
  },
  activeStep: {
    color: theme.palette.primary.main,
  },
  formFields: {
    borderRadius: '20px',
    padding: '2.5rem',
  },
  formGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '2rem',
    rowGap: '1.2rem',
    marginBottom: '2.8rem',
  },
  fullWidth: {
    gridColumnEnd: 'span 2',
  },
  labelInput: {
    '& > p': {
      marginBottom: '0.7rem',
    },
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const GigForm = (props) => {
  const { mode, onSubmit } = props;
  const classes = useStyles();

  const [formStep, setFormStep] = useState(0);
  const [state, setState] = useState({
    role: '',
    company: '',
    country: '',
    state: '',
    address: '',
    tags: '',
    minimumSalary: '',
    maximumSalary: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
    setErrors({ ...errors, [target.name]: null });
  };

  const handleContinueClick = () => {
    setFormStep(1);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const { fieldErrors, isValid } = validateGigData(state);

    if (!isValid) {
      setErrors(fieldErrors);
    } else {
      console.log(state);
      onSubmit(state);
    }
  };

  return (
    <form className={classes.form} method='POST'>
      <List component={Paper} className={classes.formSteps} variant='outlined'>
        <ListItem>
          <ListItemIcon
            {...(formStep === 0 && { className: classes.activeStep })}
          >
            &#186;
          </ListItemIcon>
          <ListItemText
            {...(formStep === 0 && { className: classes.activeStep })}
          >
            Basic Data
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <UnfoldMoreIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon
            {...(formStep === 1 && { className: classes.activeStep })}
          >
            &#186;
          </ListItemIcon>
          <ListItemText
            {...(formStep === 1 && { className: classes.activeStep })}
          >
            Renumeration
          </ListItemText>
        </ListItem>
      </List>

      <Paper className={classes.formFields} variant='outlined'>
        {formStep === 0 && (
          <>
            <div className={classes.formGroup}>
              <div className={classes.labelInput}>
                <Typography>Role</Typography>
                <TextField
                  name='role'
                  error={Boolean(errors.role)}
                  helperText={errors.role}
                  value={state.role}
                  onChange={handleInputChange}
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className={classes.labelInput}>
                <Typography>Company</Typography>
                <TextField
                  name='company'
                  error={Boolean(errors.company)}
                  helperText={errors.company}
                  value={state.company}
                  onChange={handleInputChange}
                  variant='outlined'
                  fullWidth
                />
              </div>
            </div>

            <div className={classes.formGroup}>
              <div className={classes.labelInput}>
                <Typography>Location</Typography>
                <TextField
                  name='country'
                  error={Boolean(errors.country)}
                  helperText={errors.country}
                  value={state.country}
                  onChange={handleInputChange}
                  label='Country'
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className={classes.labelInput}>
                <Typography>&zwnj;</Typography>
                <TextField
                  name='state'
                  error={Boolean(errors.state)}
                  helperText={errors.state}
                  value={state.state}
                  onChange={handleInputChange}
                  label='State/Region'
                  variant='outlined'
                  fullWidth
                />
              </div>

              <TextField
                name='address'
                error={Boolean(errors.address)}
                helperText={errors.address}
                value={state.address}
                onChange={handleInputChange}
                className={classes.fullWidth}
                variant='outlined'
                label='Address'
                fullWidth
              />
            </div>

            <div className={classes.formGroup}>
              <div className={`${classes.labelInput} ${classes.fullWidth}`}>
                <Typography>Add tags</Typography>
                <TextField
                  name='tags'
                  error={Boolean(errors.tags)}
                  helperText={errors.tags}
                  value={state.tags}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Add more'
                  fullWidth
                />
              </div>
            </div>
            <div className={classes.formActions}>
              <Button component={Link} to='/gigs' color='primary' size='large'>
                Cancel
              </Button>
              <Button
                color='primary'
                size='large'
                variant='contained'
                onClick={handleContinueClick}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {formStep === 1 && (
          <>
            <div className={classes.formGroup}>
              <div className={classes.labelInput}>
                <Typography>Salary</Typography>
                <TextField
                  name='minimumSalary'
                  error={Boolean(errors.minimumSalary)}
                  helperText={errors.minimumSalary}
                  value={state.minimumSalary}
                  onChange={handleInputChange}
                  label='Minimum'
                  variant='outlined'
                  fullWidth
                />
              </div>
              <div className={classes.labelInput}>
                <Typography>&zwnj;</Typography>
                <TextField
                  name='maximumSalary'
                  error={Boolean(errors.maximumSalary)}
                  helperText={errors.maximumSalary}
                  value={state.maximumSalary}
                  onChange={handleInputChange}
                  label='Maximum'
                  variant='outlined'
                  fullWidth
                />
              </div>
            </div>

            <div className={classes.formActions}>
              <Button
                color='primary'
                size='large'
                onClick={() => setFormStep(0)}
              >
                Back
              </Button>
              <Button
                color='primary'
                size='large'
                variant='contained'
                type='submit'
                onClick={handleAddClick}
              >
                Add a gig
              </Button>
            </div>
          </>
        )}
      </Paper>
    </form>
  );
};

GigForm.propTypes = {
  mode: PropTypes.oneOf(['create', 'edit']).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default GigForm;
