//**************************************************************
import React from 'react'
import '../../../App.css'
import PropTypes from "prop-types";

//**************************************************************
const Select = ({ catagory  , updateBook , bookId}) => (
    <div className="book-shelf-changer">
        <select value={catagory} onChange={async (event)=> await updateBook(bookId , event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
)

//**************************************************************
Select.propTypes = {
    catagory : PropTypes.string,
    bookId : PropTypes.string,
    updateBook :  PropTypes.func.isRequired
}

//**************************************************************
export default Select
//**************************************************************
