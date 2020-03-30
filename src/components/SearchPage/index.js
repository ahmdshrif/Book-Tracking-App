//*****************************************************************

import React from 'react'
import '../../App.css'
import SearchBar from './SearchBar'
import SearchBookResult from './searchBookResult'
import * as BooksAPI from '../../BooksAPI';
//*****************************************************************

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResult: null
        }
    }

    updateBook = async (book, event) => {
        try {
            await BooksAPI.update(book, event);
            alert(`done adding book to ${event}`)

        } catch (error) {
            console.warn("error on update book{Abi } \n" + error)

        }
    }

    getSearchResult = async (query) => {
        if (query === "") {
            this.setState({ searchResult: null })
            return
        }
        try {

            let searchResult = await BooksAPI.search(query);
            console.log(searchResult)
            this.setState({ searchResult :  searchResult.error ? null : searchResult })

        } catch (error) {
            console.warn("error on get search result  {API error} \n " + error)
        }
    }


    render() {
        const { searchResult } = this.state
        return (
            <div className="search-books">
                <SearchBar getSearchResult={this.getSearchResult} />
                {searchResult == null ? null :
                    <SearchBookResult books={searchResult} updateBook={this.updateBook} />
                }
            </div>
        )
    }
}
//*****************************************************************
