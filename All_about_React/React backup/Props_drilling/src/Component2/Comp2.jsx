import React from "react";
import Comp3 from "./Comp3";
class Comp2 extends React.Component{
    render(){
        // const {name,loc,sal}=this.props.employee
        return(
            <>
            <Comp3 emp={this.props.employee}/>
            {/* <hr /> */}
            <h1>This is Component 2</h1>
            <h3>{JSON.stringify(this.props.employee)}</h3>
            {/* <h2>name={name}</h2> */}
            <hr/>
            </>
        )
    }
}
export default Comp2;