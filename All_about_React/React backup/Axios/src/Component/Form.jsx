import React, { useState } from "react";
const Form = ()=>{
    const [name , setName]=useState({
        email:"",
        password:""
    })
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("Submit handler is working");
        // alert("good morning" )
        
    }
    const changeHandler =(event)=>{
        console.log("change handler is working")
        console.log(event.target.name);
        setName({[event.target.name]:event.target.value})
    }
    return (
        <>
        <form onSubmit = {submitHandler}>
        <h3>Login Form</h3>
        <input type="text" placeholder="Username" name="email" value={name.email} onChange={changeHandler} />
        <br /><br />
        <input type="text" placeholder="Password" name="password" value={name.password} on onChange={changeHandler} />
        <br /><br />
        <input type="submit" value="Login" />
        <button type="reset"> Reset</button>
        </form>
        </>
    )
}
export default Form;