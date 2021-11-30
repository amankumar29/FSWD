import React from "react";
class Ccomponent extends React.Component{
    render() {
        return(
            <>
            <h6>next comp{JSON.stringify(this.props.x)}</h6>
            <h1>new comp {this.props.x.roll}</h1>
           <h1>hello </h1>
            </>
        )
    }
}
export default Ccomponent;