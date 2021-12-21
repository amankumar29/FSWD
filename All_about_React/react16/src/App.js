import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {


  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path= "/Home" element ={<Home/>}/>
    <Route path= "/Axios" element ={<About/>}/>
    <Route path= "/FormHandling" element ={<Contact/>}/>
  </Routes>
  
  </BrowserRouter>
  
  </>
  );
}
export default App;
