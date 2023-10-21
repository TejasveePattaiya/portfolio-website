import { Box, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <>
    <Box sx={{width:'100%',height:'3rem',backgroundColor:'#1baba8',display:'flex',justifyContent:'space-between',alignItems:'center',pl:7,pr:7}}>
<Typography variant="body1" color="initial" sx={{color:'#fff',fontWeight:800,cursor:'pointer',fontSize:20}}>Protofolio.</Typography>
<Box sx={{display:'flex',gap:2,cursor:'pointer'}}>
<Typography variant="body1" color="initial"   component={Link} to={"/home"} sx={{color:'#fff',fontWeight:500}}>Home</Typography>
<Typography variant="body1" color="initial"  component={Link} to={"/about"}  sx={{color:'#fff',fontWeight:500}}>About</Typography>
<Typography variant="body1" color="initial"   component={Link} to={"/services"} sx={{color:'#fff',fontWeight:500}}>Services</Typography>
<Typography variant="body1" color="initial"    component={Link} to={"/skill"} sx={{color:'#fff',fontWeight:500}}>Skill</Typography>
<Typography variant="body1" color="initial"   component={Link} to={"/project"} sx={{color:'#fff',fontWeight:500}}>Project</Typography>
<Typography variant="body1" color="initial"   component={Link} to={"/contact"}  sx={{color:'#fff',fontWeight:500}}>Contact</Typography>
</Box>
    </Box>
    </>
  )
}

export default index