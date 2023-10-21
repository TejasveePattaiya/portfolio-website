import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import WifiCallingIcon from "@mui/icons-material/WifiCalling";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
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
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", gap: 1, textAlign: "center" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: 30, fontWeight: 600, color: "#fff" }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: " #33e7f2", fontSize: 30, fontWeight: 600 }}
              >
                Me
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 20, fontWeight: 600, color: "#fff" }}
            >
              Let's Work Together
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "#fff", fontSize: 16, mt: 2 }}
            >
              I'm a web Designer with extensive experiance for over 3 years.
              <br />
              expertise is to create and website design,frontend design,and
              <br />
              many more....
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 4 }}>
              <SendIcon sx={{ color: "#33e7f2", fontSize: 15 }} />
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff", fontSize: 15, fontWeight: 600 }}
              >
                tejashvipattaiya03@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <WifiCallingIcon sx={{ color: "#33e7f2", fontSize: 15 }} />
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#fff", fontSize: 15, fontWeight: 600 }}
              >
                7000129116
              </Typography>
            </Box>
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
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Enter your name"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,

                  background: "#606263",
                  borderRadius: 2,
                  width: "30rem",
                  fontWeight: 600,
                  fontSize: 14,
                  // boxShadow:
                  //   " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
              InputProps={{
                // endAdornment: (
                //   <inputAdornment position="end">
                //     <PermIdentityOutlinedIcon sx={{ color: "grey" }} />
                //   </inputAdornment>
                // ),
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
            />
            <TextField
              fullWidth
              type={"email"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Enter your Email"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,

                  background: "#606263",
                  borderRadius: 2,
                  width: "30rem",
                  fontWeight: 600,
                  fontSize: 14,
                  // boxShadow:
                  //   " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
              InputProps={{
                // endAdornment: (
                //   <inputAdornment position="end">
                //     <PermIdentityOutlinedIcon sx={{ color: "grey" }} />
                //   </inputAdornment>
                // ),
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
            />
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Enter your Subjects"
              sx={{
                "& .MuiInputBase-root": {
                  height: 45,

                  background: "#606263",
                  borderRadius: 2,
                  width: "30rem",
                  fontWeight: 600,
                  fontSize: 14,
                  // boxShadow:
                  //   " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
              InputProps={{
                // endAdornment: (
                //   <inputAdornment position="end">
                //     <PermIdentityOutlinedIcon sx={{ color: "grey" }} />
                //   </inputAdornment>
                // ),
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
            />
            <TextField
              fullWidth
              type={"text"}
              required
              autoComplete="off"
              variant="outlined"
              placeholder="Enter your messages"
              sx={{
                "& .MuiInputBase-root": {
                  height: "10rem",

                  background: "#606263",
                  borderRadius: 2,
                  width: "30rem",
                  fontWeight: 600,
                  fontSize: 14,

                  // textAlign:'start'
                  // boxShadow:
                  //   " inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  outline: "none",
                  border: "none",
                },
              }}
              InputProps={{
                // endAdornment: (
                //   <inputAdornment position="end">
                //     <PermIdentityOutlinedIcon sx={{ color: "grey" }} />
                //   </inputAdornment>
                // ),
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: "#000",
                backgroundColor: "#33e7f2",
                borderRadius: 5,
                textTransform: "capitalize",
                fontWeight: 600,
                "&:hover": {
                  background: "#33e7f2",
                  boxShadow: "0 0 20px #33e7f2",
                  // transitionDuration: "1s",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "3rem",
          backgroundColor: "#215859",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 600,
        }}
      >
        Developed with love by Tejasvee Pattaiya @ 2023
      </Box>
    </>
  );
};

export default Contact;
