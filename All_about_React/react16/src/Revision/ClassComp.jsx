// How to create Class Components?

import React from "react";
class ClassComp extends React.Component{
    emp={
        name:"Raju",
        loc:"BLR",
        sal:55000
    };
    render(){
        let{name,loc,sal}=this.emp
        return(
            <>
            {/* s */}
            <h3>Emp_Name = {name}</h3>
            <h3>Emp_Location = {loc}</h3>
            <h3>Emp_Salary = {sal}</h3>
            </>
        )
    }
}
export default ClassComp;
