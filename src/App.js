import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./pages";
import Splash from "./components/Splash";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
