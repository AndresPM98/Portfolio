import './App.css';
import { Route } from "react-router-dom";
import { Landing ,Home} from "./views"
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/'


function App() {
  return (
    <div>
     
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      
    </div>
  );
}

export default App;
