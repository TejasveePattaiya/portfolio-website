import { Box, Typography, Button } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import About from "./About";
import Services from "./Services";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

// import { Animation } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <Box 
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          // opacity:0,
          // animation:'slideTop .1s ease Forwards',
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "#fff",
              fontSize: 25,
              fontWeight: 500,
              animationName:'ex',
              animationDuration:'4s',
              // animation: "slideLeft 1s ease forwards",
              // animationDelay: "calc(.2s*var(--i))",
              // opacity: 0,
              // transition: ".5s ease",
            }}
          >
            Hello, It's me
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontSize: 40, fontWeight: 600 }}
          >
            Tejasvee Pattaiya
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "#fff", fontSize: 20, fontWeight: 600 }}
            >
              And I'm a{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "#33e7f2", fontSize: 20, fontWeight: 600 }}
            >
              Frontend Devoloper
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontSize: 14, mt: 2 }}
          >
            I'm a web Designer with extensive experiance for over 3 years.
            <br />
            expertise is to create and website design,frontend design,and
            <br />
            many more....
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Box
              sx={{
                width: "2rem",
                height: "2rem",
                border: "1.5px solid #33e7f2",
                borderRadius: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#33e7f2",
                  boxShadow: "0 0 20px #33e7f2",
                },
                cursor: "pointer",
              }}
            >
              <FacebookOutlinedIcon
                sx={{
                  color: "#33e7f2",
                  fontSize: 15,
                  "&:hover": {
                    color: "#000",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "2rem",
                height: "2rem",
                border: "1.5px solid #33e7f2",
                borderRadius: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#33e7f2",
                  boxShadow: "0 0 20px #33e7f2",
                },
                cursor: "pointer",
              }}
            >
              <TwitterIcon
                sx={{
                  color: "#33e7f2",
                  fontSize: 15,
                  "&:hover": {
                    color: "#000",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "2rem",
                height: "2rem",
                border: "1.5px solid #33e7f2",
                borderRadius: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#33e7f2",
                  boxShadow: "0 0 20px #33e7f2",
                },
                cursor: "pointer",
              }}
            >
              <InstagramIcon
                sx={{
                  color: "#33e7f2",
                  fontSize: 15,
                  "&:hover": {
                    color: "#000",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "2rem",
                height: "2rem",
                border: "1.5px solid #33e7f2",
                borderRadius: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#33e7f2",
                  boxShadow: "0 0 20px #33e7f2",
                },
                cursor: "pointer",
              }}
            >
              <LinkedInIcon
                sx={{
                  color: "#33e7f2",
                  fontSize: 15,
                  "&:hover": {
                    color: "#000",
                  },
                }}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "60%",
              textTransform: "capitalize",
              backgroundColor: "#33e7f2",
              color: "#000",
              borderRadius: 40,
              fontWeight: 800,

              mt: 2,
              "&:hover": {
                background: "#33e7f2",
                boxShadow: "0 0 20px #33e7f2",
                transitionDuration: "1s",
              },
            }}
          >
            More about me
          </Button>
        </Box>
        <Box
          sx={{
            width: "25%",
            height: "55%",
            cursor: "pointer",
            border: "2px solid #fff",
            borderRadius: 40,
            boxShadow: "5px 5px 15px 15px #33e7f2",
            "&:hover": {
              // background: "#33e7f2",
              transitionDuration: "1s",
              boxShadow: "0 0 20px #33e7f2",
            },
          }}
        >
          <img
            src={require("../assets/ee.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt="..."
          />
        </Box>
      </Box>
      <About />
      <Services />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
