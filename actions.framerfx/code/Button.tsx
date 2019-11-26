import * as React from "react";
import { Frame } from "framer";

export function Component() {
  return (
    <Frame
      size={"100%"}
      onClick={() => {
        console.log("hello world");
      }}
    />
  );
}
