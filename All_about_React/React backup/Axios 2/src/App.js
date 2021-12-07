import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar} from "./Navbar/Navbar";
import {Home} from "./Navbar/Home";
import {About} from "./Navbar/About";
import {Services} from "./Navbar/Services";
// import {Contact} from "./Navbar/Contact";
// import FormEx from "./Component/FormEx"
import Form from "./Component/Form";
import AxiosExGet from "./AxiosComponent/AxiosExGet"

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path = "/Home" element = {<AxiosExGet/>}/>
      <Route path = "/About" element = {<About/>}/>
      <Route path = "/Services" element = {<Services/>}/>
      <Route path = "/Contact" element = {<Form/>}/>
    </Routes>
  </BrowserRouter>
   
  </>
  );
}
export default App;
