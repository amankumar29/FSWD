import React from "react";
import axios from "axios";
import ContactList from "../Contact App/ContactList";
import ContactDetail from "../Contact App/ContactDetail";
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            selectedData:{}
        }
    }
    ContactDetail = (data)=>{
        console.log("data here="+data);
        this.setState({selectedData:data})
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
            {/* <h6>{JSON.stringify(this.state.selectedData)}</h6> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <ContactList x = {this.state.data} contDetail={this.ContactDetail}/>
                    {/* <h6>{JSON.stringify(this.state.data.slice(0,2))}</h6> */}
                    </div>
                    <div className="col-md-4">
                            <ContactDetail clickdata={this.state.selectedData}/>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}
export default Contact;