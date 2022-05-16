import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login page/Login';
import Forget from './Component/Forget/Forget';
import Verification from "./Component/Verification/Verification";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
              <Route path='/'  element={<Login />}/>
            </Routes>
            <Routes>
              <Route path='/Forget'  element={<Forget />}/>
            </Routes>   
            <Routes>
              <Route path='/Verification'  element={<Verification />}/>
            </Routes>         
        </Router>
      
    </div>
  );
}

export default App;
