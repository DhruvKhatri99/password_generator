import InputGroup from "./InputGroup";
import Password from "./Password";
import { useState, useCallback, useEffect } from "react";

export default function PasswordContainer() {
  const [length, setLength] = useState(8);
  const [uprCaseAllowed, setUprCaseAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnm";

    if (uprCaseAllowed) {
      str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%&?^~:;{}[]-+=_*|/,.";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, uprCaseAllowed, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, uprCaseAllowed, numberAllowed, charAllowed, generatePassword]);

  function handleUprCaseAllowed() {
    setUprCaseAllowed((prevState) => !prevState);
  }

  function handleNumAllowed() {
    setNumberAllowed((prevState) => !prevState);
  }

  function handleSpecialCharAllowed() {
    setCharAllowed((prevState) => !prevState);
  }


  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="container ">
      {copied && (
        <div className="alert alert-success" role="alert">
          Password copied to clipboard!
        </div>
      )}
      <Password pass={password}  handleCopy={handleCopy} />
      <div className="d-flex align-items-center mt-3 ms-5">
        <label htmlFor="customRange" className="form-label fs-5">
          Password length: {length}
        </label>
        <input
          type="range"
          className="form-range fs-3"
          min="8"
          max="100"
          id="customRange"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
      </div>
      <InputGroup
        uprCaseAllowed={uprCaseAllowed}
        numberAllowed={numberAllowed}
        charAllowed={charAllowed}
        handleUprCaseAllowed={handleUprCaseAllowed}
        handleNumAllowed={handleNumAllowed}
        handleSpecialCharAllowed={handleSpecialCharAllowed}
      />
    </div>
  );
}
