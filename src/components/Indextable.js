import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { IndexSeracj } from "./IndexSeracj";
import { Tableheader } from "./Tableheader";
import { useState } from "react";
import { useEffect } from "react";

const api = "http://localhost:8081/codes/C80.1/neoplasm";
console.log(api);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.secondary,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    height: 1,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    height: 1,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    height: 1,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const [result, setResult] = useState("");
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code) {
          const response = await fetch(
            `/codes/X58/details/?index?filterBy=a =${global.years}`
          );
          if (response.ok) {
            const data = await response.json();
            setResult(data);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values]);

  const handleClose = () => {
    setIsClosed(true);
    window.location.reload();
  };

  console.log("our result is", result);

  return (
    <>
      <TableContainer
        sx={{
          mt: "80px",
          display: "flex",
          position: "absolute",
          width: "830px",
          ml: "-100px",
        }}
      >
        <Table sx={{ minWidth: "100px" }}>
          <TableHead
            sx={{
              borderTop: "1px solid grey",
              borderLeft: "1px solid grey",
              borderRight: "1px solid grey",
            }}
          >
            <TableRow sx={{}}>{/*  <Tableheader /> */}</TableRow>
          </TableHead>

          <TableHead
            sx={{
              height: "7%",

              border: "1px solid grey",
            }}
          >
            <TableRow
              sx={{
                border: "1px solid grey",
              }}
            >
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
              >
                N-Term
              </StyledTableCell>

              <StyledTableCell
                sx={{ border: "1px solid grey", height: "20px" }}
                align="right"
              >
                Primary
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Secondary
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Cainsitu
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                benigin
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                unsertain
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                unspecified
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{}}>
            {rows.map((row) => (
              <StyledTableRow
                sx={{
                  border: "1px solid grey",
                  height: "10px",
                }}
                key={row.name}
              >
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "20px",
                  }}
                  component="th"
                  scope="row"
                ></StyledTableCell>
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "20px",
                  }}
                  align="right"
                ></StyledTableCell>
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "20px",
                  }}
                  align="right"
                ></StyledTableCell>
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "20px",
                  }}
                  align="right"
                ></StyledTableCell>
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "20px",
                  }}
                  align="right"
                ></StyledTableCell>
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "20px",
                  }}
                  align="right"
                ></StyledTableCell>
                <StyledTableCell
                  sx={{
                    border: "1px solid grey",
                    height: "1px",
                  }}
                  align="right"
                ></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
