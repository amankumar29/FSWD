import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'
import AppRoutes from './routes';


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
