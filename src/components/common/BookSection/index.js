//**************************************************************
import React from 'react'
import  '../../../App.css'
import BookLI from '../BookList'
import PropTypes from'prop-types'

//**************************************************************
const Booksection = ({ name , books ,  updateBook}) => (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book)=>(
        <BookLI name= {book.title} 
        author={book.hasOwnProperty('authors') ? book.authors[0] : null }
        image={book.hasOwnProperty('imageLinks')  && book.imageLinks.hasOwnProperty( 'smallThumbnail') ? book.imageLinks.smallThumbnail : null}
        catagory ={book.shelf}
        bookId = {book.id}
        updateBook ={updateBook} 
        />
        ))}
      </ol>
    
    </div>
  </div>
  )

//**************************************************************
Booksection.propTypes = {
    name : PropTypes.string.isRequired,
    books :PropTypes.arrayOf(PropTypes.object).isRequired,
    updateBook :  PropTypes.func.isRequired
}

//**************************************************************
export default Booksection
//**************************************************************
