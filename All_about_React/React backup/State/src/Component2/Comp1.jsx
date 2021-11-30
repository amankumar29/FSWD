import React from "react";
class Comp1 extends React.Component{
    employee={
        name:"Raju",
        loc:"BLR",
        sal:45000
    }
    render(){
        return(
            <>
            <h1>Hello World</h1>
            <h3>{this.employee}</h3>
            </>
        )
    }
}
  export default Comp1;
