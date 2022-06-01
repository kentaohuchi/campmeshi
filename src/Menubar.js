import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function LabelBottomNavigation(props) {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        component={Link}
        to="/Post/Display"
        label={props.newfoods}
        value="recents"
        icon={props.news}
      />
      <BottomNavigationAction
      component={Link}
      to="/Food/Serch"
      label={props.cook}
      value="recents"
      icon={props.cooking}
        
      />
      <BottomNavigationAction
        component={Link}
        to="/CampSerch"
        value="recents"
        label={props.campserch}
        icon={props.mountain}
      />
      <BottomNavigationAction 
      component={Link}
      to="/MyPage"
      label={props.mypage}
      value="recents" 
      icon={props.person} 
      />
    </BottomNavigation>
  );
}