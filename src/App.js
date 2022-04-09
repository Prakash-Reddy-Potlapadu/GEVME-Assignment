import React,{useReducer} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes  from "./routes";
import './App.scss'
import {UserContext} from './containers/SingedUpUsers/context/context'
import {initialUserState,userReducer} from './containers/SingedUpUsers/context/userReducer'

function App() {
  const [userState,dispatch]=useReducer(userReducer,initialUserState);
  return (
    <UserContext.Provider value={{data:userState,dispatch:dispatch}}>
    <BrowserRouter>
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} exact path={route.path} component={route.component} />
            ))}
        </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
