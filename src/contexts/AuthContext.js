import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {

    state = {
        authenticated: false,
    }

    toggleAuth = () => {
        this.setState({ authenticated: !this.state.authenticated })
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                { this.props.children }
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider
