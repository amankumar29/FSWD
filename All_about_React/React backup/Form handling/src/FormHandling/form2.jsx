import React from "react";
class Form2 extends React.Component{
    state ={
        email:'',
        password:''
    }
   /*  submitHandler=(event)=>{
        event.preventDefault();
        console.log("submitHandler is working");
        console.log(this.state.email.length);
        if(this.state.email.length!==0&&this.state.password.length!==0)
        {
            console.log("alert check");
        alert("Submitted successfully" );
        
        }
        else{
            console.log("ele is working");
        }
        
    } */
    submitHandler=(event)=>{
        // event.preventDefault();
        console.log("submitHandler is working");
        event.preventDefault();
        // if(event.target.name.length!==0)
        if(this.state.email.length!==0 && this.state.password.length!==0)
        {
            console.log("if statement is working")
            alert('Submitted successfully ' + event.target.name);
        }
        if(this.state.email.length===0){
            alert("enter your name 1st")
        }
          }
    changeHandle=(event)=>{
        console.log(event.target.value);
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <>
            <form onSubmit={this.submitHandler}>
                <h1> Login Form </h1>
                <input type="Text" placeholder="Enter username" name="email" onChange={this.changeHandle} />
                <br /> <br />
                <input type="Text" placeholder="Enter password" name="password" onChange={this.changeHandle} />
                <br/> <br />
                <input type="submit" value="Submit"/>
                <input type="reset" value="Reset"/>

            </form>
            </>
        )
    }
}
export default Form2;