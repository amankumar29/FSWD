import React from "react";
class ContactList extends React.Component{
    rowData= (data)=>{
            // console.log(data);
            this.props.contDetail(data)

    }
    render(){
        return(
            <>
            <h2>Contact List</h2>
            {/* <h6>{JSON.stringify(this.props.x)}</h6> */}
            <table className="table table-striped">
                <thead>
                    <tr >
                        <td><b>Id</b></td>
                        <td><b>Name</b></td>
                        <td><b>Phone</b></td>
                        <td><b>Email</b></td>
                    </tr>
                </thead>
                <tbody>
                   { this.props.x.map((event)=>{
                        const { id, name,phone,email}=event
                        return (
                            <tr onClick={this.rowData.bind(this,event)}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{phone}</td>    
                            <td>{email}</td>    
                        </tr>
                        )

                    })}
                   
                    
                </tbody>
            </table>
            </>
        )
    }
}
export default ContactList;