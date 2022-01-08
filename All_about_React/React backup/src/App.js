import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Task from "./Component/Task";


function App() {


  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path= "/Task" element ={<Task/>}/>
    
    
  </Routes>
  
  </BrowserRouter>
  
  </>
  );
}
export default App;
