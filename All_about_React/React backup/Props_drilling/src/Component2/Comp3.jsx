import React from "react";
import Comp4 from "./Comp4";
class Comp3 extends React.Component{
    render(){
        return(
            <>
            <hr />
            <Comp4 x ={this.props.emp} />
            <h1>This is Component 3</h1>
            <h3>{JSON.stringify(this.props.emp)}</h3>
           
            <hr />
            </>
        )
    }
}
export default Comp3;