import { validator } from '../helpers';

const { notEmpty, minLength } = validator;

const validate = (validation) => {
  return Object.keys(validation)
    .map((field) => validation[field].isValid)
    .every(Boolean);
};

const getFieldErrors = (fields) => {
  return Object.entries(fields).reduce(
    (errors, [fieldName, { isValid, errorMessage }]) => {
      if (isValid) return errors;

      return { ...errors, ...{ [fieldName]: errorMessage } };
    },
    {}
  );
};

export const validateGigData = (fields) => {
  const {
    role,
    company,
    country,
    state,
    address,
    tags,
    minimumSalary,
    maximumSalary,
  } = fields;

  const validation = {
    role: {
      isValid: minLength(role, 4),
      errorMessage: 'Name must be at least 3 characters',
    },
    company: {
      isValid: notEmpty(company),
      errorMessage: 'Company cannot be blank',
    },
    country: {
      isValid: notEmpty(country),
      errorMessage: 'Country cannot be blank',
    },
    state: {
      isValid: notEmpty(state),
      errorMessage: 'State cannot be blank',
    },
    address: {
      isValid: minLength(address, 30),
      errorMessage: 'Address cannot be blank',
    },
    tags: {
      isValid: tags.split(',').length > 0,
      errorMessage: 'Add at least one tag',
    },
    minimumSalary: {
      isValid: isFinite(minimumSalary) && minimumSalary > 0,
      errorMessage: 'Must be a number > 0',
    },
    maximumSalary: {
      isValid: isFinite(maximumSalary) && maximumSalary > minimumSalary,
      errorMessage: 'Must be a number > minimum',
    },
  };
  const isValid = validate(validation);
  return { isValid, fieldErrors: !isValid && getFieldErrors(validation) };
};
