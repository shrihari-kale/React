import { Router } from "express";
import { todos } from "./db.mjs";

const router = Router();
router.get("/", (req, res)=>{
    res.json(todos);
})

router.post("/",(req, res)=>{
    const { title } = req.body;
    const createdTodo = createNewTodo(title)
    res.status(201).send(createdTodo);
})

function createNewTodo(title){
    const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
        createData:new Date().toISOString()
    }
    todos.push(newTodo);
    return newTodo;
}
export default router;