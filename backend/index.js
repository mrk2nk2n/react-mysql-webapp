import express from "express"
// import mysql from "mysql"
import mysql from "mysql2"
import cors from "cors"
import dotenv from 'dotenv';

const app = express()

dotenv.config();

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})

// if there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Youdk!mysql94'

app.use(express.json()) // allow to send any json file using client
//app.use(cors())
app.use(cors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE'
}));

app.get("/", (req,res)=>{
    res.json("hello this is the backend");
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
        // if (err) {
        //     console.log(err);
        // }
        // res.status(200).json(data);
    })
})

// typically, the codes above can be organised into separate files such as
// one file for the root
// one file for the books etc..
// for now, we keep it all within one file

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"; // question mark provides additional security
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [values], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Book has been created successfully.");
    });
});

app.put("/books/:id", (req,res)=>{
    const bookId = req.params.id
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?"; // question mark provides additional security
    
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [...values, bookId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("Book has been updated successfully.");
    });
});

app.delete("/books/:id" , (req,res)=>{
    const bookId = req.params.id
    const q = "DELETE FROM test.books WHERE id = (?)"

    db.query(q, [bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully");
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend 123!");
});