import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Result from "./Result.jsx";

test("LocalResult renders without crushing", () => {
  let div = document.createElement("div");

  ReactDOM.render(<Result />, div);
});

test("Local Result renders correctly", () => {
  const country = "United States";
  const type = "local-result";
  const bigMacCount = 24;
  const purchaseParity = 2.0;

  const { getByText, queryByText } = render(
    <Result
      isLocalResult={true}
      country={country}
      type={type}
      bigMacCount={bigMacCount}
      purchaseParity={purchaseParity}
    />
  );

  expect(
    getByText((content) => {
      return (
        content.startsWith("You could buy") &&
        content.endsWith("of Big Macs in your country")
      );
    })
  ).toBeInTheDocument();

  expect(
    getByText((content) =>
      content.startsWith("Your Dollar Purchasing Parity (PPP) is")
    )
  ).toBeInTheDocument();

  expect(queryByText(`Random Country: ${country}`)).not.toBeInTheDocument(); // not rendered
});

test("Random Result renders correctly", () => {
  const country = "United States";
  const type = "random-result";

  const { getByText, queryByText } = render(
    <Result isLocalResult={false} country={country} type={type} />
  );

  expect(
    getByText((content) => {
      return content.startsWith("You could buy");
    })
  ).toBeInTheDocument();

  expect(queryByText(`Random Country: ${country}`)).toBeInTheDocument(); // not rendered

  expect(queryByText("Your Dollar Purchasing Parity")).not.toBeInTheDocument(); // not rendered
});
