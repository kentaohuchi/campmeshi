import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" style={{margin:'0 0 0 auto'}}>
      <FormLabel component="legend">非公開/公開</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="公開"
          control={<Switch color="primary" />}
        />
      </FormGroup>
    </FormControl>
  );
}