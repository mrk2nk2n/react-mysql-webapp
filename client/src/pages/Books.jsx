import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: ''
// })

// const config = {
//     headers: {
//         'Authorization': 'Bearer token123',
//         'Content-Type': 'application/json'
//     }
// }

const Books = () => {
    const [books,setBooks] = useState([])
    
    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                //const res = await axios.get("http://127.0.0.1:8800/api/books")
                // const res = await axios.get("http://localhost:8800/api/books")
                const res = await axios.get("http://library.k-lam.xyz/api/books")
                setBooks(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id) => {
        try{
            // await axios.delete("http://localhost:8800/api/books/"+id);
            await axios.delete("http://library.k-lam.xyz/api/books/"+id);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return (
    <div>
        <h1>Ken's Library</h1>
        <div className="books">
            {books.map((book) => (
                <div className="book" key={book.id}>
                    {book.cover && <img src={book.cover} alt="" />}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <p>{book.price}</p>
                    <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                    <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <div className="newBook">
            <button className="add-NewBook"><Link to="/add">Add book</Link></button>
        </div>
    </div>
  )
}

export default Books