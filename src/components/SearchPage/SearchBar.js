//**************************************************************
import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
//**************************************************************
const searchBare = ({ getSearchResult }) => (
        <div className="search-books-bar">
            <Link to='/' >
                <button className="close-search" >Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={async (event)=> await getSearchResult(event.target.value) } />
            </div>
        </div>

  )
//**************************************************************

searchBare.propTypes = {
    getSearchResult :  PropTypes.func.isRequired
}

//**************************************************************


export default searchBare
//**************************************************************
