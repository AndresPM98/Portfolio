import './App.css';
import { Route } from "react-router-dom";
import {Home} from "./views"
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/'


function App() {
  return (
    <div>
     
      <Route exact path="/" component={Home} />
      
    </div>
  );
}

export default App;
