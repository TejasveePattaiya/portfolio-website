import { Box, Typography } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "110vh",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
          >
            Latest{" "}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#33e7f2", fontSize: 30, fontWeight: 600 }}
          >
            Project
          </Typography>
        </Box>
        <Box sx={{ display: "flex",gap: 3, mt: 4 }}>
          <Box
            sx={{
              width: "18rem",
              height: "15rem",
              "&:hover": {
                //   background: "#33e7f2",
             
                // boxShadow: "0 0 20px #33e7f2",
                boxShadow: "5px 5px 8px 8px #33e7f2",
                transitionDuration:'1S'
              },
            }}
          >
            <img
              src={require("../assets/ui.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              
              }}
              alt="..."
            />
          </Box>
          <Box sx={{ width: "18rem", height: "15rem",  "&:hover": {
                // boxShadow: "0 0 20px #33e7f2",
                boxShadow: "5px 5px 8px 8px #33e7f2",
                transitionDuration:'1S'
              }, }}>
            <img
              src={require("../assets/web.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
                
              }}
              alt="..."
            />
          </Box>
          <Box
            sx={{
              width: "18rem",
              height: "15rem",
              "&:hover": {
                boxShadow: "5px 5px 8px 8px #33e7f2",
                transitionDuration:'1s'
                // boxShadow: "0 0 20px #33e7f2",
              },
            }}
          >
            <img
              src={require("../assets/ui.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",

              }}
              alt="..."
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Project;
