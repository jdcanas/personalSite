import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BioContainer from "./components/BioContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Welcome from './components/Welcome';
import GameContainer from './challengeSum/GameContainer';
import TextBox from "./components/TextBox";

const intro = "blah";
const about = "blah2";

const RouterContainer = () => (
        <div className="page">
            <Route exact path="/" component={Welcome} />
            <Route path="/intro" render= {() => <TextBox textContent={intro}/>}/>
            <Route path="/about" render= {() => <TextBox textContent={about}/>}/>
            <Route path="/bio" component={BioContainer} /> 
            <Route path="/theme" component={ThemeSwitcher} /> 
            <Route path="/sumGame" component={GameContainer} /> 
        </div>
);
// <Route path="/sumGame" render={() => <GameContainer/>} />
export default RouterContainer;