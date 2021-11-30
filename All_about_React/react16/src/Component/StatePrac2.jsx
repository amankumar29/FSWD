import React from "react";
class StatePrac2 extends React.Component{
    state={
        qty:0,
    }
    add=()=>{
        if(this.state.qty<10){
        this.setState({qty:this.state.qty+1})
        console.log(this.state.qty);
        console.log("check add");
        }
        else{
            alert("reached maximum qty")
        }
        
    }
    sub=()=>{
        if(this.state.qty>0){
            this.setState({qty:this.state.qty-1})
        console.log(this.state.qty)
        console.log("check sub")
        }
        else{
            alert("atleast 1 qty required")
        }
        
    }
    
    render(){
        console.log("check render")
        return(
            <>
            <h6>{this.state.qty}</h6>
            <button onClick={this.add}>Add</button>
            <button onClick={this.sub}>Sub</button>

            <h1> Hello..</h1>
            </>
        )

    }
}
export default StatePrac2;