import React from "react";

  const InputForm = (props) => {
    return <form id="application-input" onSubmit={props.submitHandler}>
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100" />
        <input id="submit" onChange={props.showPreview} type="submit" value={props.currentValue} />
      </form>;
  }

  export default InputForm 