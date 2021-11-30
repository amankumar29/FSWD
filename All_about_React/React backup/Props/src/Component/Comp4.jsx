
import React from "react";
class Comp4 extends React.Component{
    render() {
        return(
            <>
            <h1> Hello Goodmorning</h1>
            <h2>{JSON.stringify(this.props.x)}</h2>
            <h6>name={this.props.x.Name}</h6>
            <h4>Location={this.props.x.Loc}</h4>
            
            </>
        )

    }
}
export default Comp4;
