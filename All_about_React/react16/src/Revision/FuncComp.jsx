// How to create function component?

function FuncComp(){
    let emp={
        name:"Aman",
        loc:" BLR",
        sal:43000,
    };
    let{name,loc,sal}=emp
    return(
        <>
        {/* <h1>{JSON.stringify(emp)}</h1> */}
        <h3>Emp_Name={name}</h3>
        <h3>Emp_Location={loc}</h3>
        <h3>Emp_Salary={sal}</h3>
        </>
    )
}
export default FuncComp;