import React from "react";
class Contactlist extends React.Component{
    render(){
        return(
            <>
            <h2>Contact List</h2>
            {/* <h6>{JSON.stringify(this.props.x)}</h6> */}
            <table className="table table-striped" border="3px">
                <thead>
                    <tr>
                        <td><b>ID</b></td>
                        <td><b>Name</b></td>
                        <td><b>Phone</b></td>
                        <td><b>Email</b></td>
                        <td><b>Website</b></td>
                        
                    </tr>
                </thead>
                <tbody>
                  {  this.props.x.map((event)=>{
                        const {id , name , phone , email , website} = event
                        return(
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>{website}</td>
                            </tr>
                        )
                           
                        
                    })}
                </tbody>
            </table>

            </>
        )
    }
}
export default Contactlist;