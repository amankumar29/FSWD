import React from "react";
class Const extends React.Component{
    constructor(props){
        super(props)
        console.log("const method");
    }
    state={
        name:"ram",
        loc:"blr"
    }
    render(){
        console.log("render method");
        return(
            <>
            <h6>name={this.state.name}</h6>
            </>
        )
    }
}
export default Const;