import React from "react";

function Input({
  placeholder = "placeholder",
  type = "text",
  error = null,
  name = "text",
  onChange,
}) {
  function getClasses() {
    let classes = "input-group ";
    if (error) classes += "error";
    return classes;
  }

  return (
    <div className={getClasses()}>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Input;
