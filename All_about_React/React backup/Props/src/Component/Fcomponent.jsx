import Ccomponent from "./Ccomponent";
function Fcomponent() {
    let obj ={
        name:"ram",
        roll:10,
    };
    return(
        <>
        <Ccomponent x={obj}/>
        <h1> Hello, Good Morning </h1>
        <h2> He is Ravi</h2>
        </> 
    )
}
export default Fcomponent;