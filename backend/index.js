import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { mongoDBURL, PORT } from "./config.js";
import bookRouter from "./routes/bookRoutes.js";


const app = express();

app.use(express.json())

app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }))
app.get('/', (req, res)=>{
    // console.log(req)
    return res.status(234).send('Welcome to the MERN stack')
})

app.use('/books', bookRouter)


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

