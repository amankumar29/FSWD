import Header from "./Component/Header";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";


function App() {
  return (
    <>
    <BrowserRouter>    <Header />
    <Routes>
      <Route path ="/Home" element = {<Home/>} />
      <Route path ="/About" element = {<About/>} />
      <Route path ="/Services" element = {<Services/>}/>
      <Route path ="/Contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
  {/* <Header /> */}
    </>
  );
}
export default App;
