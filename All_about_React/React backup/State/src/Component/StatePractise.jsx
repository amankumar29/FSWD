import React from "react";
class StatePractise extends React.Component{
    state={
        qty:0,
    }
    // qty=0;
    change=()=>{
        this.setState({qty:this.state.qty+1})
        // this.qty=this.qty+1
        console.log(this.state.qty);
        // console.log(this.qty);
        console.log("change hand");

    }
    render(){
        console.log("render method");
        return (
            <>
            <h6>{this.state.qty}</h6>
            <button onClick={this.change}>change</button>
            <h1>Hii..Good Morning </h1>
            </>
        )

    }
}
export default StatePractise;