import React from 'react' 
import App from '../App'
import ThemeContextProvider from './ThemeContext'
import AuthContextProvider from './AuthContext'
import BookContextProvider from './BookContext'

const Provider = () => {
	return (
		<ThemeContextProvider>
			<AuthContextProvider>
				<BookContextProvider>
					<App />
				</BookContextProvider>
			</AuthContextProvider>
		</ThemeContextProvider>
	)
}

export default Provider
