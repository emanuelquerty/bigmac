import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Header from "./header.jsx";

test("Header renders without crushing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header onSetInputAmount={() => {}} />, div);
});

test("Header renders correctly", () => {
  const country = "United States";

  const { getByTestId } = render(
    <Header onSetInputAmount={() => {}} country={country} />
  );

  expect(getByTestId("test-header")).toHaveTextContent(`You are in ${country}`);

  expect(getByTestId("test-header")).toHaveTextContent(
    `Please enter an amount of money in your local currency`
  );

  expect(getByTestId("test-amount-input")).toBeInTheDocument();
});
