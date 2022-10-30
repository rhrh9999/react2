import React from "react";


function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-'}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

export default Dialog;