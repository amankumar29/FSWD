import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Table2 from "./Table2";

const Table1 = (props) => {
  const [deleted, setDeleted] = React.useState([]);
  // const deleteHandler=()=>{
  //     setDeleted()
  // }
  console.log("deleted", deleted);
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ width: "35%", marginTop: "20px" }}
      >
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task name</TableCell>
              <TableCell align="right">Comment</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.list &&
              props.list.length > 0 &&
              props.list.map((row, index) => (
                <>
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.taskname}
                    </TableCell>
                    <TableCell align="right">{row.comment}</TableCell>
                    <TableCell align="right">
                      <Button>Edit</Button>
                      <Button
                        onClick={() => {
                          setDeleted([...deleted, row]);
                          props.list.pop(row.taskname, row.comment);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Table2 deleted ={deleted}/>
    </>
  );
};

export default Table1;
