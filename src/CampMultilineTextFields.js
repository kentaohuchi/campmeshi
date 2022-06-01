import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CampEvaluation from './CampEvaluation';

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
          id={props.multi}
          label={props.multi}
          placeholder={props.multi}
          onChange={event => {
          const { value } = event.target;
          const { FoodName } =props.multi;
          props.setFoodName({FoodName:value})
          }}
          multiline
        />
        <TextField
          id={props.multi1}
          label={props.multi1}
          placeholder={props.multi1}
          onChange={event => {
            const { value } = event.target;
            const { Amount } =props.multi1;
            props.setAmount({Amount:value})
            }}
          multiline
        />
        <TextField
          id={props.multi2}
          placeholder={props.multi2}
          label={props.multi2}
          onChange={event => {
            const { value } = event.target;
            const { Make } =props.multi2;
            props.setMake({Make:value})
            }}
          multiline
          rows={4}
        />
        <div style={{display:'flex'}}>
        <h4>評価</h4>
        <CampEvaluation/>
        </div>
      </div>
      
    </Box>
  );
}