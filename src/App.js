import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import { ThemeContext } from './contexts/ThemeContext'
import { AuthContext } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

class App extends Component {
	render() {
		return (
			<ThemeContext.Consumer>{(context) => {
				return (
					<div className={`App ${context.theme}`}>		
						<Navbar />
						<BookList />	
						<ThemeToggle />		
					</div>	
				)	
			}}</ThemeContext.Consumer>
		)
	}
}

export default App
