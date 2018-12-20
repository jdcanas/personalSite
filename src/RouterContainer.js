import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BioContainer from "./components/BioContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Welcome from './components/Welcome';
import GameContainer from './challengeSum/GameContainer';

const RouterContainer = () => (
        <div className="page">
            <Route exact path="/" component={Welcome} />
            <Route path="/bio" component={BioContainer} /> 
            <Route path="/theme" component={ThemeSwitcher} /> 
            <Route path="/sumGame" component={GameContainer} /> 
        </div>
);
export default RouterContainer;