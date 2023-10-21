import { Box, Typography, Button } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from '@mui/icons-material/Apple';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeOffIcon from '@mui/icons-material/CodeOff';
const Services = () => {
  return (
    <>
         {/* <Typography variant="body1" color="initial">My Services</Typography> */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        //   gap:1,
          flexDirection:'column'
        }}
      >
   <Box sx={{display:'flex',gap:1}}>
    <Typography variant="body1" color="initial" sx={{color:'#fff',fontSize:30,fontWeight:600}}>My</Typography>
    <Typography variant="body1" color="initial" sx={{color:'#33e7f2',fontSize:30,fontWeight:600}}>Services</Typography>
   </Box>
   <Box sx={{display:'flex',gap:2,justifyContent:'center',alignItems:'center'}}>

        <Box
          sx={{
            width: "25%",
            height: "36vh",
            display: "flex",
            flexDirection: "column",
            // boxShadow: "1px 1px 4px blue",
            boxShadow:'0 0 20px #33e7f2',
            p:2,
            gap:0.5
          }}
        >
          <CodeOffIcon sx={{ color: "#33e7f2" }} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontWeight: 500, fontSize: 22 }}
          >
            UI/UX Design
          </Typography>
          <Typography variant="body1" color="initial" sx={{color:'#fff',fontSize:10,}}>
            UI refers to the screens, buttons, toggles, icons, and other visual
            elements that you interact with when using a website, app, or
            electronic device. UX refers to the entire interaction you have with
            a product, including how you feel about the interaction.
          </Typography>
          <Button variant="contained" color="primary" sx={{borderRadius:10,width:'50%',backgroundColor:'#33e7f2',color:'#000',textTransform:'capitalize',fontWeight:600, boxShadow:'0 0 20px #33e7f2',}}>
            learn more
          </Button>
        </Box>
        <Box
          sx={{
            width: "25%",
            height: "36vh",
            display: "flex",
            flexDirection: "column",
            // boxShadow: "1px 1px 4px blue",
            boxShadow:'0 0 20px #33e7f2',
            p:2,
            gap:0.5
          }}
        >
          <OpenInNewIcon sx={{ color: "#33e7f2" }} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontWeight: 500, fontSize: 22 }}
          >
            Web Design
          </Typography>
          <Typography variant="body1" color="initial" sx={{color:'#fff',fontSize:10,}}>
            UI refers to the screens, buttons, toggles, icons, and other visual
            elements that you interact with when using a website, app, or
            electronic device. UX refers to the entire interaction you have with
            a product, including how you feel about the interaction.
          </Typography>
          <Button variant="contained" color="primary" sx={{borderRadius:10,width:'50%',backgroundColor:'#33e7f2',color:'#000',textTransform:'capitalize',fontWeight:600,  boxShadow:'0 0 20px #33e7f2',}}>
            learn more
          </Button>
        </Box>
        <Box
          sx={{
            width: "25%",
            height: "36vh",
            display: "flex",
            flexDirection: "column",
            // boxShadow: "1px 1px 4px blue",
            boxShadow:'0 0 20px #33e7f2',
            p:2,
            gap:0.5
          }}
        >
          <AppleIcon sx={{ color: "#33e7f2" }} />
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontWeight: 500, fontSize: 22 }}
          >
        App Desi
          </Typography>
          <Typography variant="body1" color="initial" sx={{color:'#fff',fontSize:10,}}>
            UI refers to the screens, buttons, toggles, icons, and other visual
            elements that you interact with when using a website, app, or
            electronic device. UX refers to the entire interaction you have with
            a product, including how you feel about the interaction.
          </Typography>
          <Button variant="contained" color="primary" sx={{borderRadius:10,width:'50%',backgroundColor:'#33e7f2',color:'#000',textTransform:'capitalize',fontWeight:600,   boxShadow:'0 0 20px #33e7f2',}}>
            learn more
          </Button>
        </Box>
      </Box>
          
   </Box>
    </>
  );
};

export default Services;
