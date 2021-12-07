import React from "react";
class Form extends React.Component{
    state ={
        email:'',
        password:'',
        data:[],
    }
    submitHandler=(event)=>{
        // event.preventDefault();
        
        event.preventDefault();
        // if(event.target.name.length!==0)
        if(this.state.email.length!==0&&this.state.password.length!==0)
        {
            alert('Submitted successfully ' + event.target.name);
        }
        if(this.state.email.length===0){
            alert("enter your name 1st")
        }
          }
    handleChange=(event)=>{
        console.log(event)
        console.log(event.target);
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
        this.setState.data=[{}]
    
        
    }

    render(){
        return(
            <>
            <div className="container" style={{border:"5px solid green"}}>
                <div className="row" style={{border:"5px solid red"}}>
                    <div className="col">
                    <div className="form-group-row" style={{border:"5px solid blue"}}>
            <form onSubmit={this.submitHandler}>
                <h1><em>Login Form</em></h1>
                {/* <label><h5><em>Username</em></h5> </label> */}
                <input type="text"
                className="form-control" placeholder='Enter Username' name="email" onChange={this.handleChange}/>
                <br/>
                {/* <label><h5><em>Password</em></h5></label> */}
                <input type="text" className="form-control" placeholder='Enter Password'
                 name="password" onChange={this.handleChange}/>
                <br /><br/>
                {/* <button > Login </button> */}
                 <input type="submit" value="submit" className="btn btn-primary mb-2"/>
            </form>
            </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Form;