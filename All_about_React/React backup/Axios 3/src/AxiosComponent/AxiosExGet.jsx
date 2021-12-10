import React from 'react';
import axios from 'axios';
class AxiosExGet extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
        console.log("constructor");
    }
    componentDidMount(){
        console.log("component did mount");
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({data:res.data})
            console.log(res.data);
        }).catch()
        // console.log(this.state.data);
    }
    render(){
        console.log("render method");
        return(
            <>
            <h6>{JSON.stringify(this.state.data)}</h6>
                    <h1>hello check api</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>website</th>
                            </tr>
                        </thead>
                        <tbody>
                           { this.state.data.map((ele)=>{
                                const {id,email,name,phone,website}=ele
                                return <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{website}</td>
                            </tr>
                            })}
                        </tbody>
                    </table>
            
            </>
        )
    }
}
export default AxiosExGet;