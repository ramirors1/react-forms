import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();  //keeps current text that was typed, prevents form from automatically refreshing back to default
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
