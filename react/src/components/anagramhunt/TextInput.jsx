import React from 'react';

function TextInput(props) {
  const handleChange = (e) => {
    props.setInputValue(e.target.value); // Update input value using prop (optional)
    props.checkAnswer(e.target.value);
  };

  return (
    <div>
      <form id="ana-form">
        <div id="your-guess">
          <input
            type="text"
            className="input-group mb-3"
            value={props.inputValue}
            onChange={handleChange}
            placeholder="Type anagram guess here"
          />
          <p>You entered: {props.inputValue}</p>
        </div>
      </form>
    </div>
  );
}

export default TextInput;
