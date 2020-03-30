//**************************************************************
import React from 'react'
import '../../App.css'
import Header from './Header'
import ListBookContent from './ListBookcontent'
import SearchButton from './SearchButton'
import * as BooksAPI from '../../BooksAPI'
//**************************************************************

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books : [],
            currentlyReading: [],
            wantToRead: [],
            read: [] 
        }
    }

    componentDidMount() {
        this.getAllBooks()
      }
    
      getAllBooks = async () => {
    
        try {
    
          let allBooks = await BooksAPI.getAll();

          this.Filter(allBooks)
    
        } catch (error) {
          console.warn("error on get All books {API} \n " + error)
        }
      }
    
      updateBook = async (book, event) => {
        try {
          await BooksAPI.update(book, event);
          alert(`done adding book to ${event}`)
           await this.getAllBooks()
    
        } catch (error) {
          console.warn("error on update book{Abi } \n" + error)
    
        }
      }

    Filter(allBooks) {
        let currentlyReading = allBooks.filter((book) => {
            return book.shelf === "currentlyReading"
        })

        let wantToRead = allBooks.filter((book) => {
            return book.shelf === "wantToRead"
        })

        let read = allBooks.filter((book) => {
            return book.shelf === "read"
        })
        this.setState({ currentlyReading, wantToRead, read })

    }
    render() {
        const { currentlyReading, read, wantToRead } = this.state
        return (
            <div className="list-books">
                <Header />
                <ListBookContent
                    currentlyReading={currentlyReading}
                    wantToRead={wantToRead}
                    read={read}
                    updateBook = {this.updateBook}
                />
                <SearchButton />
            </div>
        )
    }
}
//**************************************************************
export default SearchPage
//**************************************************************
