import React, { useState } from "react";
const FormEx = () =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setmobile]=useState("");
    const [location,setLocation]=useState("");
    const [data,setData]=useState([]);
    const submitHandler=(event)=>{
            event.preventDefault();
            const newdata={name,email,mobile,location};
            setData([...data,newdata])
            setName("");
            setmobile("");
    }
    /* const changeHandler=(ele)=>{
        
    } */

    return(
        <>
        <h6>{JSON.stringify(data)}</h6>
        <form onSubmit={submitHandler}>
            <h3>Fill The Form</h3>
            <input type="text" value={name} onChange={obj=>setName(obj.target.value)} placeholder="Enter your Name" />
            <br /><br />
            <input type="text"  onChange={obj=>setmobile(obj.target.value)} placeholder="Enter your Mobile No." />
            <br /><br />
            <input type="email"  onChange={obj=>setEmail(obj.target.value)} placeholder="Enter your Email" />
            <br /><br />
            <input type="text"  onChange={obj=>setLocation(obj.target.value)} placeholder="Enter your Location" />
            <br /><br />
            <input type="submit" value="Submit" />
        </form>
        
        </>
    )
}
export default FormEx;