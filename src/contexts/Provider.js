import React, { Component } from 'react' 
import App from '../App'
import ThemeContextProvider from './ThemeContext'
import AuthContextProvider from './AuthContext'

class Provider extends Component {
	render() {
		return (
			<ThemeContextProvider>
				<AuthContextProvider>
					  <App />
				</AuthContextProvider>
			</ThemeContextProvider>
		)
	}
}

export default Provider
