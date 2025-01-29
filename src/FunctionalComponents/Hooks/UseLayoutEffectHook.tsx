import React, { useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffectHook() {
  useEffect(() => {
    console.log("This is useEffect console. executed just after the browser paints the screen");
  });

  useLayoutEffect(() => {
    console.log("This is useLayoutEffect console. executed just after the DOM is updated and just before the browser paints the screen");
  });
  return <div>Welcome</div>;
}
