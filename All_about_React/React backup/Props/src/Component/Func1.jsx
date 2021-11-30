import Func2 from "./Func2"
function Func1() {
    let emp = {
        Name: "Ravi",
        Loc: "BLR",
        Sal: 55000
    };
    return(
        <>
        <Func2 x= {emp}/>
        </>
    )
}
export default Func1;
