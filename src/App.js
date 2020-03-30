import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'
import { ThemeContext } from './contexts/ThemeContext'
import { AuthContext } from './contexts/AuthContext'


class App extends Component {
	render() {
		return (
			<AuthContext.Consumer>{(authContext) => (
				<ThemeContext.Consumer>{(themeContext) => {
					const { authenticated, toggleAuth } = authContext 
					return (
						<div className={`App ${themeContext.theme}`}>	
							<div onClick={ toggleAuth }>
								{ authenticated ? 'Logged In' : 'Logged Out' }	
							</div>
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
