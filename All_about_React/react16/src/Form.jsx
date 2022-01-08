import React, { useState } from "react";
import { Button, FormControl, Paper, TextField } from "@mui/material";
// import Table from "./Table";
import Table1 from "./Table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import Table2 from "./Table2";

const Form=()=> {

const [deleted, setDeleted] = React.useState([]);
const [Edited, setEdited] = React.useState({
    task:"",
    comment1:""
});
const  [list,setList]=useState([])
const  [input,setInput]=useState({
    taskname:Edited.task?Edited.task:"",
    comment:Edited.comment1?Edited.comment1:""
})

const [showTable,setShowTable]=useState(false)

const handleChange=(e)=>{
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    
    e.preventDefault()
}
const handleSumbit=(e)=>{
    setList([...list,input])  
    e.preventDefault()
   setShowTable(true)
   setInput({
       taskname:"",
       comment:""
   })
}

useEffect(()=>{
    setInput({
        taskname:Edited.task,
        comment:Edited.comment1
    })
},[Edited])

console.log("edited",Edited)
  return (
    <>

    <Paper style={{marginTop:"30px",alignContent:"center", width:"30%",padding:"30px"}}>
    <FormControl>
       
        <TextField label="Taskname" name= "taskname" onChange={handleChange} style={{margin:"5px"}} value={input.taskname} type="text"/>
      
        <TextField label="Comment" name="comment" onChange={handleChange} style={{margin:"5px"}} value={input.comment} type="text" />
      <Button onClick={handleSumbit} color="primary">Add</Button>
      </FormControl>
    </Paper>

    {showTable && (
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
            {list &&
              list.length > 0 &&
              list.map((row, index) => (
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
                      <Button onClick={()=>setEdited({task:row.taskname,comment1:row.comment})} >Edit</Button>
                      <Button
                        onClick={() => {
                          setDeleted([...deleted, row]);
                          list.pop(row.taskname, row.comment);
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
    )}
      
    </>
  );
}

export default Form;
