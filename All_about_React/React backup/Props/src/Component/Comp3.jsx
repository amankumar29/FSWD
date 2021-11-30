import React from "react";
import Comp4 from "./Comp4";
class Comp3 extends React.Component{
    Employee={
        Name: "Ravi",
        Loc: "BLR",
        Sal: 45000
    }
    render (){
        return (
            <>
            <Comp4 x = {this.Employee}/>
            <h1>Employee Details</h1>
            </>
        )
    }
}
export default Comp3;