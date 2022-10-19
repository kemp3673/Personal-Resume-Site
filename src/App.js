//import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import {GlobalFont} from './fonts/fonts.js';
import Home from "./pages";

function App() {
  return (
    <Router>
      <GlobalFont />
      <Home />
    </Router>
  );
}

export default App;
