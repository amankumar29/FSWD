import React from "react";
class StatePrac2 extends React.Component{
    state={
        qty:0,
    }
    change=()=>{
        this.setState({qty:this.state.qty+1})
        console.log(this.state.qty);
        console.log("check change");
    }
    render(){
        console.log("check render")
        return(
            <>
            <h6>{this.state.qty}</h6>
            <button onClick={this.change}>Add</button>
            <button onclick={this.chnage}>Sub</button>

            <h1> Hello..</h1>
            </>
        )

    }
}
export default StatePrac2;