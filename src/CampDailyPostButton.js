import * as React from 'react';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function DisableElevation(props) {
  return (
    <Button variant="contained" disableElevation
        component={Link}
        to={'CampDailyPostDisplay'} > 
        投稿
      {props.Buttonname}
    </Button>
  );
}