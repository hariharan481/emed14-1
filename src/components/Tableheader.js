import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export const Tableheader = () => {
  return (
    <div>
      <div className="table">
        <Box
          sx={{
            width: "100px",
            height: "50%",
          }}
        >
          <Stack direction={"row"}>
            <input
              placeholder="UseFilter"
              style={{
                width: "138px",
                marginLeft: "2px",
                height: "31px",
                border: "none",
              }}
            ></input>
            <Box>
              {" "}
              <Typography
                variant="subtitle1"
                sx={{
                  backgroundColor: "#c8e2dd",
                  width: "192px",
                  textAlign: "center",
                  height: "37px",
                }}
              >
                maligant
              </Typography>
            </Box>
            <div className="box1">
              <Box
                sx={{
                  height: "30px",
                  width: "85px",
                  backgroundColor: "white",

                  height: "35px",
                }}
              ></Box>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <Box
                sx={{
                  height: "30px",
                  width: "83px",
                  backgroundColor: "white",

                  height: "35px",
                }}
              ></Box>
            </div>

            <Box>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{
                  backgroundColor: "#c8e2dd",
                  width: "220px",
                  textAlign: "center",
                  height: "37px",
                }}
              >
                Behaviour
              </Typography>
            </Box>
          </Stack>
        </Box>
      </div>
    </div>
  );
};
