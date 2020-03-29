//**************************************************************
import React from 'react'
import '../../App.css'
import BookSection from '../common/BookSection'
import PropTypes from 'prop-types';

//**************************************************************
const ListBookContent = ({ currentlyReading, read, wantToRead, updateBook }) => (
    <div className="list-books-content">
        <div>

            {currentlyReading.length === 0 ? null : <BookSection name={"currently Reading"} books={currentlyReading} updateBook={updateBook} />}
            {wantToRead.length === 0 ? null : <BookSection name={"want to read"} books={wantToRead} updateBook={updateBook} />}
            {read.length === 0 ? null : <BookSection name={"read"} books={read} updateBook={updateBook} />}

        </div>
    </div>)
//**************************************************************

ListBookContent.propTypes = {
    currentlyReading : PropTypes.array.isRequired,
    read : PropTypes.array.isRequired,
    wantToRead : PropTypes.array.isRequired,
    updateBook :  PropTypes.func.isRequired
}

//**************************************************************

export default ListBookContent
//**************************************************************


