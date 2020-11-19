import React from "react";
import { Router } from "@reach/router";
import MainAjax from "../Components/AjaxDataComponents/Main";
import WelcomePage from "../Components/index";
import Quiz from "../Components/Quiz";
import Football from "../Components/FootballTeamOrganiser";


const Routes = () => {
  return (
    <Router>
        <WelcomePage path = "/"/>
        <MainAjax path = "ajax"/>
        <Quiz path = "quiz" />
        <Football path = "football" />
    </Router>
  );
};

export default Routes;
