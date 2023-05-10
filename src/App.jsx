import { useState } from "react";
import MyButton from './components/myButton/MyButton.jsx';
import CustomForm from './components/customForm/CustomForm.jsx';
import "./App.css";

function App() {

  // // with this logic we can add a numbers
  // const [myNum, setMyNum] = useState(0);
  // const onClickHandler = () => {
  //   setMyNum(myNum + 1);
  // };

  // // with this logic we can show or hide our function
  // const [myName, setMyName] = useState("");
  // const onClickHandler = () => {
  //   setMyName("Geek");
  // };

  // const hideMyNameHandler = () => {
  //   setMyName("");
  // };




  return (
    <div className="App">
      <h1>Sign up form</h1>
      <CustomForm />
      {/* <h3>my name is : {myName}</h3>
      <button onClick={onClickHandler}>show my name</button>
      <button onClick={hideMyNameHandler}>hide my name</button> */}
    </div>
  );
}

export default App;