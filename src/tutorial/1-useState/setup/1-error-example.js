import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const handleClick = (e) => {
    title = "Title Updated";
    console.log(title);
  };
  // Question is When we click on the button, would the title be updated?
  // Answer is No. Because no re-rendering happened. App is in old state.
  // Only when the re-render happens, if state has changed, then we can see the updates

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
