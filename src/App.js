import React from "react";

const App  = () => {
const [ emailInput, setEmailInput ] = React.useState("")
const [ passwordInput, setPasswordInput ] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value)
  }
  
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value)
  }

  return (
    <form submit={handleSubmit}>
      <input type="email"  name="email" value={emailInput} onChange={handleEmailInput}/>
      <input type="password" name="email" value={passwordInput} onChange={handlePasswordInput}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
