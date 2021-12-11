import React from "react";
class ContactDetail extends React.Component{
    render(){
        return (
            <>
            <h2>Contact Detail</h2>
            <h6>{JSON.stringify(this.props.clickdata)}</h6>
            </>
        )
    }
}
export default ContactDetail;