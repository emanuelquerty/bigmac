import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("App renders without crushing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
