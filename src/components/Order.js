import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 50,marginTop:1}}>
      <FormControl style={{width:"20%",backgroundColor:"#282424",borderRadius:"10px"}}>
        <InputLabel id="demo-simple-select-label" style={{color:"white"}}>Order By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={(e)=>handleChange(e)}
          style={{color:"white"}}
        >
          <MenuItem value={10}>Name</MenuItem>
          <MenuItem value={20}>Release Date</MenuItem>
          <MenuItem value={30}>Popularity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
