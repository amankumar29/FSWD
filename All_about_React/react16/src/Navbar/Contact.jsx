import React, { useState } from "react";
export const Contact =() => {
    let [name , setName]= useState(
       {name:"",
        mobile:"",
        email:"",
        location:""}
    )
    let submitHandler = (event) => {
        event.preventDefault();
        
    }
    let changeHandler = (event)=>{
        setName({[event.target.name]:event.target.value})
    }
    return(
        <>
        {/* <h6>{JSON.stringify(name)}</h6> */}
        <form onSubmit={submitHandler}>
            <h2>Fill the Form</h2>
            <input type = "text" placeholder = "Enter Your Name" name = "name" onChange = {changeHandler} value={name.name}/>
            <br /><br />
            <input type = "text" placeholder = " Enter Your Mobile No." name = "mobile" onChange={changeHandler} value={name.mobile}/>
            <br /><br />
            <input type = "email" placeholder = " Enter your Email"name = "email" onChange = {changeHandler} value={name.email}/>
            <br /><br />
            <input type = "Text" placeholder = " Enter your Location"name = "location" onChange = {changeHandler} value={name.location}/>
            <br /><br />
            <input type = "submit" value = "Submit"/>
            <input type = "reset" value = "Reset"/>
        </form>

        </>
    )
}