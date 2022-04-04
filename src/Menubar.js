import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation(props) {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label={props.newfoods}
        value="recents"
        icon={props.news}
      />
      <BottomNavigationAction
        label={props.label}
        value="recents"
        icon={props.cooking}
      />
      <BottomNavigationAction
        label={props.campserch}
        value="recents"
        icon={props.mountain}
      />
      <BottomNavigationAction 
      label={props.mypage}
      value="recents" 
      icon={props.person} 
      />
    </BottomNavigation>
  );
}