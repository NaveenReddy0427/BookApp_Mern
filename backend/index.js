import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { mongoDBURL, PORT } from "./config.js";
import bookRouter from "./routes/bookRoutes.js";
import path from "path"
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json())

app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }))

// app.get('/', (req, res)=>{
//     return res.status(234).send('Welcome to the MERN stack')
// })

app.use('/books', bookRouter)

const dirname1 = path.dirname(fileURLToPath(import.meta.url));
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(dirname1, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(dirname1, '../frontend', 'dist', 'index.html'));
    });
}else{
    app.get('/', (req, res)=>{
        return res.status(234).send('Welcome to the MERN stack')
    })
}


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('Connected to MongoDB')
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        })      
    })
    .catch((error)=>{
        console.log(error)
    })

