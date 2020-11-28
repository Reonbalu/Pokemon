import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Pokemon from "./components/Pokemon";
import Images from "./components/Images";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/Images">Images</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
