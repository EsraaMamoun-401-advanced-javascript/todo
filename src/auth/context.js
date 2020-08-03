import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// require('dotenv').config();

const todoAPI = 'https://lab32-401.herokuapp.com'; // https://todo-esraa.herokuapp.com (can not render the todo)

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            signup: this.signup,
            user: {}
        }
    }

    login = async(username, password) => {

        try {
            const results = await fetch( `${todoAPI}/signin`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: new Headers({
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                })
            });

            let res = await results.json();
            console.log("res: ", res);

            this.validateToken(res.token);


        } catch(error) {
            console.error(`ERROR: SIGNIN`);
        }
    }

    signup = async(username, password, email, role) => {

        try {
            const results = await fetch( `${todoAPI}/signup`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({ username, password, email, role })
            });

            let res = await results.json();
            console.log("res: ", res);

            this.validateToken(res.token);


        } catch(error) {
            console.error(`ERROR: SIGNUP`);
        }
    }

    logout = () => {
        this.setLoginState(false, null, {});
    }

    validateToken = token => {

        try {
            console.log({token});
            let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'supersecret');  //mysecrettokenkeyesraa
            console.log("user: ",user);
            this.setLoginState(true, token, user);

        } catch (ex) {
            this.logout();
            console.log("token Validation error")
        }
    }
    
    setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({token, loggedIn, user});
    }

    componentDidMount() {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;

