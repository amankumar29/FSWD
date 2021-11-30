import React from "react";
import Comp2 from "./Comp2";
class Comp1 extends React.Component{
    employee={
        name:"Raju",
        loc:"BLR",
        sal:45000
    }
    render(){
        return(
            <> <hr />
            <Comp2 employee = {this.employee}/>
                       <hr />
            </>
        )
    }
}
  export default Comp1;
