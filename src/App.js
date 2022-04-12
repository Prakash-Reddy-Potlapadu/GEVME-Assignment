import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./App.scss";
import { UserContext } from "./containers/SingedUpUsers/context/context";
import { initialUserState, userReducer } from "./containers/SingedUpUsers/context/userReducer";

function App() {
    const [userState, dispatch] = useReducer(userReducer, initialUserState);
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ data: userState, dispatch: dispatch }}>
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} exact path={route.path} component={route.component} />
                    ))}
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
