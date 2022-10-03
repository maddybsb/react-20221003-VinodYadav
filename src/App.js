import {BrowserRouter as Router,Switch,Rout} from "react-router-dom"
import './styles/style.css'

import Main from "./components/Main"
import Explore from "./components/Explore";
import About from "./components/About"
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <Main />
       <Explore />
      <About /> 
      <Footer />
    </Router>
  );
}

export default App;
