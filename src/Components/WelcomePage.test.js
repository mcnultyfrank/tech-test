import React from "react";
import { render } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

describe("WelcomePage tests", () => {
  it("should render", () => {
    expect(render(<WelcomePage />)).toBeTruthy();
  });
});
