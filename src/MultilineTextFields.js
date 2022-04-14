import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields(props) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {height:'100%',width: '100%',justifyContent:'center' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{height:'100%',width: '100%',justifyContent:'center' }}>
      <TextField
          id="outlined-textarea"
          label={props.multi}
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-textarea"
          label={props.multi1}
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label={props.multi2}
          multiline
          rows={4}
        />
      </div>
      
    </Box>
  );
}