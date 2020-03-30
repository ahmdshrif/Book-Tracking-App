//**************************************************************
import React from 'react'
import '../../App.css'
import BookSection from "../common/BookSection";
import PropTypes from 'prop-types'
//**************************************************************

const searchBooksResults = ({ books , updateBook }) => (
    <div className="search-books-results">
            <BookSection name={"search Result"} books={books}  updateBook={updateBook} />
    </div>
)

//**************************************************************
searchBooksResults.PropTypes = {
    books : PropTypes.arrayOf(PropTypes.object).isRequired , 
    updateBook :  PropTypes.func.isRequired
}

//**************************************************************
export default searchBooksResults
//**************************************************************
