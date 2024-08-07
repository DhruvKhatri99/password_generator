//import { useState, useCallback } from "react";
import "./App.css";
import PasswordContainer from "./components/PasswordContainer";

function App() {
  return (
    <div className="container bg-light rounded p-0 vh-75">
      <h1 className="text-center text-danger text-wrap my-5 bg-warning  rounded p-2">
        Password Generator
      </h1>
      <PasswordContainer />
      <footer className="footer fixed-bottom">
        <div className="text-center bg-danger text-light">
          <span className="fs-5">Created by Dhruv Khatri</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
