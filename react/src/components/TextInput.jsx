import React from 'react';

function textInput({name, type, placeholder}) {

  return (
    <div>
      <label htmlFor={name} className="form-label">{placeholder}</label>
      <input type={type} className="form-control" id={name} />
    </div>
  );
}

export default textInput;