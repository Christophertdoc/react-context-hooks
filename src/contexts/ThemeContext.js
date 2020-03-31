import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()


class ThemeContextProvider extends Component {

    state = {
        theme: 'dark'
    }

    toggleTheme = () => {
        if (this.state.theme === 'dark') {
            this.setState({ theme: 'light' })
        } else { this.setState({ theme: 'dark' }) }
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider


// import React, { createContext, Component, useContext } from 'react'

// export const ThemeContext = createContext()


// const ThemeContextProvider = () => {

//     state = {
//         theme: 'dark'
//     }

//     toggleTheme = () => {
//         if (this.state.theme === 'dark') {
//             this.setState({ theme: 'light' })
//         } else { this.setState({ theme: 'dark' }) }
//     }

//     return (
//         <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//             {this.props.children}
//         </ThemeContext.Provider>
//     )
// }

// export default ThemeContextProvider
