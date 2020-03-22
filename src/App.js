import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import { ThemeContext } from './contexts/ThemeContext'
import { AuthContext } from './contexts/AuthContext'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'

class App extends Component {
	render() {
		return (
			<AuthContext.Consumer>{(authContext) => (
				<ThemeContext.Consumer>{(themeContext) => {
					return (
						<div className={`App ${themeContext.theme}`}>	
							{ authContext.authenticated.toString() }	
							<Navbar />
							<BookList />	
							<ThemeToggle />		
						</div>	
					)	
				}}</ThemeContext.Consumer>
			)}</AuthContext.Consumer>
		)
	}
}

export default App
