import { Box, Button, Typography } from "@mui/material";
import React from "react";

const About = () => {
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
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "45%",
            cursor: "pointer",
            border: "2px solid #fff",
            borderRadius: 40,
            boxShadow: "5px 5px 15px 15px #33e7f2",
            "&:hover": {
              // background: "#33e7f2",
              boxShadow: "0 0 20px #33e7f2",
              transitionDuration:'1s',
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
            >
              About{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "#33e7f2", fontSize: 30, fontWeight: 600 }}
            >
              Me
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontWeight: 500, fontSize: 20 }}
          >
            Full Stack Developer!
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#fff", fontSize: 12, fontWeight: 500 }}
          >
            A Full-Stack developer is a professional responsible for working on
            <br />
            both front-end and back-end development processes. They design,
            <br />
            develop, and maintain fully-fledged and functioning platforms with
            <br />
            databases or servers.The Full Stack Engineer job description<br />
            includes using a range of different technologies and languages <br />(such
            as Java, JavaScript, HTML, PHP, C#) to develop applications. Full<br />
            Stack Developers approach software holistically since they cater to<br />
            both user experience and functionality.
          </Typography>
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
              boxShadow:'0 0 20px #33e7f2',
              transitionDuration:'1s',
            },
          }}
        >
          More about me
        </Button>
        </Box>
      </Box>
    </>
  );
};

export default About;
