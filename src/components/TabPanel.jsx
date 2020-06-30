import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div>
      <div hidden={value !== index}>{value === index && children}</div>
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
