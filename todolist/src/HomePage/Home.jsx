import Box from '@mui/material/Button';
import Button from '@mui/material/Box';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/editlist');
  };

  return <div className="background">
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}> 
    <Box
        component="div"
        sx={{
          display: 'inline',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
      <Button onClick={handleClick}>Edit List</Button></Box>
  </div>
  </div>
}
export default Home;