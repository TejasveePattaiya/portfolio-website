import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";

const Skill = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "120vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ color: "#fff", fontSize: 30, fontWeight: 600 }}
        >
          My
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ color: "#33e7f2", fontSize: 30, fontWeight: 600 }}
        >
          Skills
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", width: "60%", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Technical Skills
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
            <img
              src={require("../assets/loogo.png")}
              style={{
                width: "10%",
                height: "6vh",
                objectFit: "contain",
              }}
              alt="..."
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "20rem",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                Html
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                90%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={90} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <img
              src={require("../assets/css.png")}
              style={{
                width: "10%",
                height: "6vh",
                objectFit: "contain",
              }}
              alt="..."
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "20rem",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                css
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                60%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={60} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <img
              src={require("../assets/js.png")}
              style={{
                width: "10%",
                height: "6vh",
                objectFit: "contain",
              }}
              alt="..."
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "20rem",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                Javascript
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                90%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={90} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <img
              src={require("../assets/phython.png")}
              style={{
                width: "10%",
                height: "6vh",
                objectFit: "contain",
              }}
              alt="..."
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "20rem",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                Python
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                50%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={50} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <img
              src={require("../assets/react.png")}
              style={{
                width: "10%",
                height: "6vh",
                objectFit: "contain",
              }}
              alt="..."
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "20rem",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                react
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff" }}
              >
                71%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={70} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Professional Skills
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 4, mt: 3,ml:3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <CircularProgress variant="determinate" value={90} sx={{color:'#33e7f2'}}/>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
                >
                  Creativity
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <CircularProgress variant="determinate" value={65} sx={{color:'#33e7f2'}}/>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
                >
                  Communication
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 4, mt: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <CircularProgress variant="determinate" value={75} sx={{color:'#33e7f2'}}/>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
                >
                  Problem Solving
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <CircularProgress variant="determinate" value={65} sx={{color:'#33e7f2'}}/>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
                >
                  Teamwork
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
