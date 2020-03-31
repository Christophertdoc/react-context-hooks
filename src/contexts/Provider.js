import React from 'react' 
import App from '../App'
import ThemeContextProvider from './ThemeContext'
import AuthContextProvider from './AuthContext'

const Provider = () => {
	return (
		<ThemeContextProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</ThemeContextProvider>
	)
}

export default Provider
