import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(intputIdentifier, newValue) {
    // inorder to update the value entered by the user
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [intputIdentifier]: +newValue, // the sign + is added in order to handle the string and integer case
      };
    });
  }
  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userrInput={userInput} onChangeInput={handleChange}/>
      {!inputIsValid && <p className="center">Please enter the duration greater than Zero!</p> }
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
