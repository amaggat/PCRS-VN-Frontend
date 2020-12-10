import './App.css';
import Page from "./Pages/Page"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Page/>
      </Router>
    </div>
  );
} 

export default App;
