import React, { useState } from 'react';
import { Tab, Tabs, makeStyles } from '@material-ui/core';

import TabPanel from '../../components/TabPanel';
import AllGigs from '../../components/gigs/AllGigs';
import GigHeader from '../../components/gigs/GigHeader';
import GigTabLabel from '../../components/gigs/GigTabLabel';

const useStyles = makeStyles((theme) => ({
  list: {
    height: 'calc(100% - 7rem)',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 10, 0, 6),
  },
  tabHeader: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  tab: {
    width: '25%',
  },
  panelWrapper: {
    overflowY: 'auto',
    flexGrow: 1,
  },
}));

const GigList = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <GigHeader />
      <div className={classes.list}>
        <Tabs
          className={classes.tabHeader}
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor='primary'
          textColor='inherit'
        >
          <Tab className={classes.tab} label={<GigTabLabel category='all' />} />
          <Tab
            className={classes.tab}
            label={<GigTabLabel category='mine' />}
          />
          <Tab
            className={classes.tab}
            label={<GigTabLabel category='rejected' />}
          />
        </Tabs>

        <div className={classes.panelWrapper}>
          <TabPanel index={0} value={currentTab}>
            <AllGigs />
          </TabPanel>
          <TabPanel index={1} value={currentTab}>
            <AllGigs />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default GigList;
