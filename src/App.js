import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import { ThemeContext } from './contexts/ThemeContext'

class App extends Component {
	static contextType = ThemeContext
	render() {
		console.log('this.context', this.context)
		return (
			<div className={`App ${this.context.theme}`}>				
				<Navbar />
				<BookList />			
			</div>	
		)
	}
}

export default App
