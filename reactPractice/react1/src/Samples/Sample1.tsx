import React, { useEffect, useRef } from "react";
const Sample1 = () => {
  const ref1 = useRef<HTMLInputElement>(null);
  //manipulate the textbox or html textbox control
  useEffect(() => {
    if (ref1.current) ref1.current.focus();
  });
  useEffect(() => {
    document.title = "Hello World!";
  });
  return (
    <div>
      <input ref={ref1} type="text" id="t1" className="forms controls"></input>
    </div>
  );
};
export default Sample1;
