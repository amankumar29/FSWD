
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import { Navbar } from "./Routing/Navbar";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
function App() {
  return (
  <>
    {/* <Navbar/> */}
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
