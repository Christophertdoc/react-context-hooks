import React, { useContext } from 'react' 
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'
import { ThemeContext } from './contexts/ThemeContext'
import { AuthContext } from './contexts/AuthContext'


const App = () => {
	const { theme } = useContext(ThemeContext)
	const { authenticated, toggleAuth } = useContext(AuthContext)
	return (
		<div className={`App ${theme}`}>	
			<div onClick={ toggleAuth }>
				{ authenticated ? 'Logged In' : 'Logged Out' }	
			</div>
			<Navbar />
			<BookList />	
			<ThemeToggle />		
		</div>	
	)	
}

export default App
