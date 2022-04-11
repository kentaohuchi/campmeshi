import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{justifyContent:'center', display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{props.title1}</MenuItem>
        <MenuItem onClick={handleClose}>{props.title2}</MenuItem>
        <MenuItem onClick={handleClose}>{props.title3}</MenuItem>
        <MenuItem onClick={handleClose}>{props.title4}</MenuItem>
        <MenuItem onClick={handleClose}>{props.title5}</MenuItem>
        <MenuItem onClick={handleClose}>{props.title6}</MenuItem>
        <MenuItem onClick={handleClose}>{props.title7}</MenuItem>
      </Menu>
      <h1>{props.homename}</h1>
    </div>
  );
}