//**************************************************************
import React from 'react'
import '../../../App.css'
import Select from "./Select";
import PropTypes from 'prop-types'
//**************************************************************

const BookLI = ({ name, image, catagory, updateBook, bookId ,author }) => (
    <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
                <Select catagory={catagory} updateBook={updateBook} bookId={bookId} />
            </div>
            <div className="book-title">{name}</div>
            <div className="book-authors">{author}</div>
        </div>
    </li>
)

//**************************************************************
BookLI.propTypes = {
    name : PropTypes.string.isRequired,
    image : PropTypes.string,
    catagory : PropTypes.string,
    bookId : PropTypes.string,
    author :  PropTypes.string,
    updateBook :  PropTypes.func.isRequired
}
//**************************************************************

export default BookLI
//**************************************************************
