import { Router } from "express";
import { main } from "../../services/chatgpt"; 

const v1_routes: Router = Router();

v1_routes.get('/', (req,res) => {
    main()
})
export default v1_routes;