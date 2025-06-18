import UseImperativeHandlerChildComponent from "./UseImperativeHandlerChildComponent";
import { useRef } from "react";

export default function UseImperativeHandler() {
  const parentButton: any = useRef(null);
  console.log("{parentButton?.current?.propsValuenew}", parentButton?.current?.propsValuenew);
  return (
    <div>
      welcome
      <UseImperativeHandlerChildComponent ref={parentButton} />
      <button
        onClick={() => {
          parentButton?.current?.hideShow();
        }}
      >
        {parentButton?.current?.propsValuenew} Parent Component button to control child component content hide and show
      </button>
    </div>
  );
}
