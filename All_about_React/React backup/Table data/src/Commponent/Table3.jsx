import React from "react";
import data from './MOCK_DATA.json'
class Table3 extends React.Component{
    render(){
        return(
            <>
            <table className= "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL-ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(15,30).map((ele,index)=>{
                        const{id,name,gender,email}=ele 
                        return(
                            
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
export default Table3;
