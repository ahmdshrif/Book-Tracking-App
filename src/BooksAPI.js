//*******************************************************
const api = "https://reactnd-books-api.udacity.com";
//*******************************************************


//*******************************************************************************
// Generate a unique token for storing your bookshelf data on the backend server.
//********************************************************************************
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


//*******************************************************************************
// Get book data with Id.
//********************************************************************************
export const get = async (bookId) => {
  const res = await fetch(`${api}/books/${bookId}`, { headers })
  const data = await res.json()
  return data.book
}


//*******************************************************************************
// Get All avilable books 
//********************************************************************************
export const getAll = async () => {
  const res = await fetch(`${api}/books`, { headers })
  const data = await res.json()
  return data.books
}



//*******************************************************************************
// update book shefle with id 
//********************************************************************************
export const update = async (book, shelf) => {
  const res = await fetch(`${api}/books/${book}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  })
  const data = await res.json()
  return data
}



//*******************************************************************************
// search in book with name or authers
//********************************************************************************
export const search = async (query) =>{
 const  res = await fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  const data = await res.json()
  return data.books
}


//*******************************************************
