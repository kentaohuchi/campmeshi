import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import CampSerchMainPrefecture from './CampSerchMainPrefecture';


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

export default function MyPageTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
          label="北海道・東北" {...a11yProps(0)} />
          <Tab label="関東" {...a11yProps(1)} />
          <Tab label="北陸・甲信越" {...a11yProps(2)} />
          <Tab label="東海" {...a11yProps(3)} />
          <Tab label="関西" {...a11yProps(4)} />
          <Tab label="中国・四国" {...a11yProps(5)} />
          <Tab label="九州・沖縄" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} onChange={handleChange}>
        <CampSerchMainPrefecture
        label='北海道'
        component={Link}
        to="/CampHokkaidou"
        prefecture={'北海道'}/>

        <CampSerchMainPrefecture
        prefecture={'青森県'}/>
        <CampSerchMainPrefecture
        prefecture={'岩手県'}/>
        <CampSerchMainPrefecture
        prefecture={'宮城県'}/>
        <CampSerchMainPrefecture
        prefecture={'秋田県'}/>
        <CampSerchMainPrefecture
        prefecture={'山形県'}/>
        <CampSerchMainPrefecture
        prefecture={'福島県'}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <CampSerchMainPrefecture
        prefecture={'東京都'}/>
        <CampSerchMainPrefecture
        prefecture={'神奈川県'}/>
        <CampSerchMainPrefecture
        prefecture={'埼玉県'}/>
        <CampSerchMainPrefecture
        prefecture={'千葉県'}/>
        <CampSerchMainPrefecture
        prefecture={'茨城県'}/>
        <CampSerchMainPrefecture
        prefecture={'栃木県'}/>
        <CampSerchMainPrefecture
        prefecture={'群馬県'}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <CampSerchMainPrefecture
        prefecture={'山梨県'}/>
        <CampSerchMainPrefecture
        prefecture={'長野県'}/>
        <CampSerchMainPrefecture
        prefecture={'新潟県'}/>
        <CampSerchMainPrefecture
        prefecture={'富山県'}/>
        <CampSerchMainPrefecture
        prefecture={'石川県'}/>
        <CampSerchMainPrefecture
        prefecture={'福井県'}/>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <CampSerchMainPrefecture
        prefecture={'岐阜県'}/>
        <CampSerchMainPrefecture
        prefecture={'静岡県'}/>
        <CampSerchMainPrefecture
        prefecture={'愛知県'}/>
        <CampSerchMainPrefecture
        prefecture={'三重県'}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
      <CampSerchMainPrefecture
        prefecture={'大阪府'}/>
        <CampSerchMainPrefecture
        prefecture={'兵庫県'}/>
        <CampSerchMainPrefecture
        prefecture={'京都府'}/>
        <CampSerchMainPrefecture
        prefecture={'滋賀県'}/>
        <CampSerchMainPrefecture
        prefecture={'奈良県'}/>
        <CampSerchMainPrefecture
        prefecture={'和歌山県'}/>
      </TabPanel>

      <TabPanel value={value} index={5}>
      <CampSerchMainPrefecture
        prefecture={'岡山県'}/>
        <CampSerchMainPrefecture
        prefecture={'広島県'}/>
        <CampSerchMainPrefecture
        prefecture={'鳥取県'}/>
        <CampSerchMainPrefecture
        prefecture={'島根県'}/>
        <CampSerchMainPrefecture
        prefecture={'山口県'}/>
        <CampSerchMainPrefecture
        prefecture={'香川県'}/>
        <CampSerchMainPrefecture
        prefecture={'徳島県'}/>
        <CampSerchMainPrefecture
        prefecture={'愛媛県'}/>
        <CampSerchMainPrefecture
        prefecture={'高知県'}/>
      </TabPanel>

      <TabPanel value={value} index={6}>
        <CampSerchMainPrefecture
        prefecture={'福岡県'}/>
        <CampSerchMainPrefecture
        prefecture={'佐賀県'}/>
        <CampSerchMainPrefecture
        prefecture={'長崎県'}/>
        <CampSerchMainPrefecture
        prefecture={'熊本県'}/>
        <CampSerchMainPrefecture
        prefecture={'大分県'}/>
        <CampSerchMainPrefecture
        prefecture={'宮崎県'}/>
        <CampSerchMainPrefecture
        prefecture={'鹿児島県'}/>
        <CampSerchMainPrefecture
        prefecture={'沖縄県'}/>
      </TabPanel>
    </Box>
  );
}

