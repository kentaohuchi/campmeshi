import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="女性" />
        <FormControlLabel value="male" control={<Radio />} label="男性" />
        <FormControlLabel value="other" control={<Radio />} label="その他" />
        <FormControlLabel value="do not answer" control={<Radio />} label="回答しない" />
      </RadioGroup>
    </FormControl>
  );
}