import React from "react";
const One =()=>{
    let CurDate = new Date(2021,12,11,20);
    CurDate = CurDate.getHours();
  
    let greeting ="";
    if (CurDate >=1 && CurDate <12)
    {
        greeting = "Good Morning ..!"
    }
        else if (CurDate >=12 && CurDate < 19)
        {
            greeting = "Good Afternoon..!"
        }
            else{
                greeting= "Good Night..!"
        }
    
    return (
        <>
        <h1>Hello { greeting}</h1>
        </>
    )

}
export default One;