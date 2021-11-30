import React from "react";
class Comp4 extends React.Component{
    render(){
        const {name,loc,sal}=this.props.x
        return(
            <>
            <hr />
            <h1>This is component 4</h1>
            <h3>{JSON.stringify(this.props.x)}</h3>
            <h6>name={name}</h6>
            <h6>loc={loc}</h6>
            <h6>sal={sal}</h6>
            <hr />
            </>
        )
    }
}
export default Comp4;