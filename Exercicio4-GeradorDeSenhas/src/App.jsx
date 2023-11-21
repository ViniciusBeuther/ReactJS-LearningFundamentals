import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function generatePassword(size) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
  const lenght = size;
  let i = 0;
  let password = "";

  while (i < lenght) {
    let randomNumber = Math.floor(Math.random() * 69);
    password += characters[randomNumber];
    console.log(password);
    i++;
  }
  return password;
}

function copyToClipboard(password) {
  const passwordInput = document.createElement("textarea");
  passwordInput.value = password;
  document.body.appendChild(passwordInput);
  passwordInput.select();
  document.execCommand("copy");
  document.body.removeChild(passwordInput);
}

function App() {
  const [copyText, setCopyText] = useState("Copy");
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false)
  
  const finalPasswordSize = showInput ? passwordSize : 8
  return (
    <>
      <h1>Password Generator</h1>
      <label htmlFor="customSize">Custom password size </label>

      <input 
        type="checkbox" 
        name="customSize" 
        id="customSizeCheckbox" 
        value = {showInput}
        onChange={() => setShowInput(!showInput)}
      />
      <br />

    {showInput ? (
      <div>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
        <br />
      </div>
    ) : null}

      
      <button
        onClick={() => {
          setPassword(generatePassword(finalPasswordSize));
          setCopyText("Copy");
        }}
      >
        Generate a password with {finalPasswordSize} digits
      </button>

      <button
        style={{ marginLeft: "15px" }}
        onClick={() => {
          setCopyText("Copied");
          copyToClipboard(password);
        }}
      >
        {copyText}
      </button>
      <h4>{password}</h4>
    </>
  );
}

export default App;
