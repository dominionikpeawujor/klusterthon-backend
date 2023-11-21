import { Router } from "express";
import { gpt } from "../../services"; 

const v1_routes: Router = Router();

v1_routes.get('/', (req,res) => {
    gpt()
})
export default v1_routes;