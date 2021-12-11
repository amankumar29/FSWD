import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/Home" element ={<Home/>} />
    <Route path="/About" element = {<About/>} />
    <Route path = "/Contact" element ={<Contact/>} />
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
