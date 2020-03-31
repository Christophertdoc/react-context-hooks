import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The Most Romantic Novel In The Whole World', author: 'Snickers Granderson', id: 1},
        {title: 'Love In The Time Of Carona', author: 'Maybelle Denegera', id: 2}
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4() }]) // NOTE: This is shorthand for the following: setBooks([...books, {title: title, author: author, id: uuid()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider
