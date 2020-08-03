import React from 'react';
import { LoginContext } from './context.js';
import Show from './show.js';

class Auth extends React.Component {

    static contextType = LoginContext;

    render() {
        let okToRender = false;

        try {
            console.log('this.context.user.capabilities===', this.context.user.capabilities);
            okToRender = this.context.loggedIn && (
                this.props.capability ? 
                    this.context.user.capabilities.includes(this.props.capability) // role not capabilities
                    : true
            )
            console.log("okToRender: ",okToRender)
        } catch (e) {
            console.warn('Not Authorized!');
        }

        return (
            <Show condition={okToRender}>
                {this.props.children}
            </Show>
        )
    }
}

export default Auth;