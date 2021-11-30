import React from "react";
import data from './MOCK_DATA.json'
class Table extends React.Component{
    render(){
        return(
            <>
            {/* <h6>{JSON.stringify(data.slice(0,10))}</h6> */}
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SEX</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0,15).map((ele,index)=>{
                        const {id,name,gender,email}=ele
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{gender}</td>
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
export default Table;