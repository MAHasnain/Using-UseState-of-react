import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Incrementation from "./Components/Incrementation";
import Decrementation from "./Components/Decrementation";

// const state = useState()

const App = () => {
return(
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link className = "comp-link" to = "/Increasing" >
            Incrementation
          </Link>
        </li>
        <li>
          <Link className = "comp-link" to = "/Decreasing">
            Decrementation
          </Link>
        </li>
      </ul>
    </div>
  <Routes>
    <Route path = "/Increasing" element = {<Incrementation />} />
    <Route path = "/Decreasing" element = {<Decrementation />}/>
  </Routes>
  </Router>
)};

export default App;
