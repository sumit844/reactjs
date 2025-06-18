import React, { forwardRef, useState } from "react";
import { useImperativeHandle } from "react";

const UseImperativeHandlerChildComponent = forwardRef((props: any, ref: any) => {
  const [show, setShow] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      hideShow: () => {
        setShow(!show);
      },
      propsValuenew: "Mohan",
    };
  });
  return (
    <div>
      {show && <div>Welcome to Child Component</div>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Hide Child Component
      </button>
    </div>
  );
});
export default UseImperativeHandlerChildComponent;
