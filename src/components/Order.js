import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { calldata } from '../redux/actions';

export default function BasicSelect() {
  const [orderby, setOrderBy] = useState('');
  const games = useSelector(state => state.games);
  const dispatcher = useDispatch();
  const handleChange = (e) => {
    setOrderBy(e.target.value);
    const temp_arr = [...games];
    if(orderby === "Name"){
      temp_arr.sort((a,b) =>{
        if ( a.slug < b.slug ){
          return -1;
        }
        if ( a.slug > b.slug ){
          return 1;
        }
        return 0;
      });
    } else if (orderby === "Release"){
      temp_arr.sort((a,b) =>{
        return new Date(b.released) - new Date(a.released);
      });
    }
    console.log(temp_arr);
    dispatcher(calldata([...temp_arr]));
  };

  useEffect(()=> console.log(orderby),[orderby]);

  return (
    <Box sx={{ minWidth: 50,marginTop:1}}>
      <FormControl style={{width:"20%",backgroundColor:"#282424",borderRadius:"10px"}}>
        <InputLabel id="demo-simple-select-label" style={{color:"white"}}>Order By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderby}
          label="Age"
          onChange={(e)=>handleChange(e)}
          style={{color:"white"}}
        >
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Release">Release Date</MenuItem>
          <MenuItem value="Popularity">Popularity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
