import React,{useState} from 'react'
// import axios from 'axios'

export const Axios = () => {
    // let a=[1,2,3,35,5,4,3]
    let a=1;
    
    const [data,setData]=useState(a);
    const change=()=>{
        setData(data+1);
    }
    // setData(2);
    // console.log(data);
    // console.log(useState(a));
    return (
        <div>
            <h6>{data}</h6>
            <button onClick={change}>change</button>
            <h1>useState</h1>
        </div>
    )
}

