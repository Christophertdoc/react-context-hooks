import React, { Component } from 'react' 
import App from '../App'
import ThemeContextProvider from './ThemeContext'

class Provider extends Component {
	render() {
		return (
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		)
	}
}

export default Provider
