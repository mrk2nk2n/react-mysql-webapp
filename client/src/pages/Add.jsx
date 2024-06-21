import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Add = () => {
    const [book, setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    };

    console.log(book);

    const handleClick = async e =>{
        e.preventDefault()
        try{
            // await axios.post("http://localhost:8800/api/books",book)
            await axios.post("http://ec2-54-251-171-91.ap-southeast-1.compute.amazonaws.com:8800/books",book)
            // await axios.post("http://library.k-lam.xyz/api/books",book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type="text" placeholder="title" onChange={handleChange} name="title"/>
        <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
        <input type="number" placeholder="price" onChange={handleChange} name="price"/>
        <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
        <button onClick={handleClick}>Add</button>
    </div>
    )
}

export default Add