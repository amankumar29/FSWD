import React from "react";
import axios from "axios";
import Contactlist from "./Contactlist";
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            this.setState({data:response.data})
        })
        .catch()
    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <Contactlist x = {this.state.data}/>
                    </div>
                    <div className="col-md-4"> 
                    
                    </div>
                </div>
            </div>
            
            {/* <h5>{JSON.stringify(this.state.data)}</h5> */}

            </>
        )
    }
}
export default Contact;
