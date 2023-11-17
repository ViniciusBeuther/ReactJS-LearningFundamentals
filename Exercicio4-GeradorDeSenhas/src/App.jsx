import { useState } from 'react'
import './App.css'

function generatePassword(){
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*';
  const lenght = 12;
  let i = 0;
  let password = ''

  while( i < lenght){
    let randomNumber = Math.floor(Math.random() * 69);
    password += characters[randomNumber];
    console.log(password);
    i++;
  }
    return password
}

function copyToClipboard(password){
  const textArea = password;
  textArea.select();
  document.execCommand('copy');
}

function App() {
  const [copyText, setCopyText] = useState("Copy")
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>Password Generator</h1>
      <button
        onClick={() => {
          setPassword(generatePassword())
          setCopyText('Copy')
        }}

      >
        Generate</button>

      <button
        style={{marginLeft: "15px"}}
        onClick={() => {
          setCopyText("Copied")
          copyToClipboard(password)
        }}>
          {copyText}
      </button>

      <h4>{password}</h4>
    </>
  )
}

export default App
