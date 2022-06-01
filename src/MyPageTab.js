
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyPagePost from './MyPagePost';
import CampDailyStoring from './CampDailyStoring';
import CampDailyRelease from './CampDailyRelease';
import CampDailyPost from './CampDailyPost';
import CampDailyPostButton from './CampDailyPostButton';
import PostAddIcon from '@mui/icons-material/PostAdd';
import KeepPost from './KeepPost';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FoodPostTab(){
  return(
    <div>
    <MyPagePost/>
    <MyPagePost/>
    <MyPagePost/>
    <MyPagePost/>
    <MyPagePost/>
    </div>

  );
}

function CampDaily(){
  return(
    <main>
    <div style={{display: 'flex'}}>
    <CampDailyStoring/>
    <CampDailyPostButton
    Buttonname={<PostAddIcon/>}
    />
    <CampDailyRelease/>
    </div>
    <CampDailyPost/>
    <CampDailyPost/>
    <CampDailyPost/>
    </main>
  );
}

export default function MyPageTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="飯投稿" {...a11yProps(0)} />
          <Tab label="キャンプ日誌" {...a11yProps(1)} />
          <Tab label="保存投稿" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FoodPostTab/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <CampDaily/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <KeepPost/>
        <KeepPost/>
        <KeepPost/>
        <KeepPost/>
        <KeepPost/>
      </TabPanel>
    </Box>
  );
}

