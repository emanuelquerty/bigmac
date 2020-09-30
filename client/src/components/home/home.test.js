import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import Home from "./home.jsx";

afterEach(cleanup);

test("Home renders without crushing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});
