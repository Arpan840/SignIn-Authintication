import "./App.css";
import ProfilePage from "./ProfilePage";
import Signin from "./Signin";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
     
      <div>
        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route element={<PrivateRoute/>} >
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      
    </Router>
  );
}

export default App;
