import express from "express"
import { allBooks, createBook, deleteBookById, getBookById, updateBookById } from "../controllers/bookController.js";

const bookRouter = express.Router()

bookRouter.post('/', createBook)
bookRouter.get('/', allBooks)
bookRouter.get('/:id', getBookById)
bookRouter.put('/:id', updateBookById)
bookRouter.delete('/:id', deleteBookById)



export default bookRouter;