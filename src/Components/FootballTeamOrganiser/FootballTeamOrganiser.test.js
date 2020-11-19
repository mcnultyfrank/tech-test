import React from "react";
import { render } from "@testing-library/react";
import FootballTeamOrganiser from "./FootballTeamOrganiser";

describe("FootballTeamOrganiser tests", () => {
  it("should render", () => {
    expect(render(<FootballTeamOrganiser />)).toBeTruthy();
  });
});
