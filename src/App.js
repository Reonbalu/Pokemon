import React from "react";
import { Link } from "react-router-dom";

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
        <li>
          <Link to="/AsyncHook">AsyncHook</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
