import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Authenticate from './components/Authenticate'
import SignUp from './components/Signup'


const ProtectedRoute = ({ component: Component, ...rest }) => {
    let token = sessionStorage.getItem("token")
    return (<Route
        {...rest}
        render={props =>
            token ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to="/login"
                    />
                )
        }
    />)
}

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <ProtectedRoute exact path="/user/profile" component={Profile} /> */}
                    <Route path="/authenticate" component={Authenticate} />
                    <Route path="/signup" component={SignUp} />
                    {/* <Route path="*" component={Error404} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;