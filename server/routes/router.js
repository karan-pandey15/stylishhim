import express from "express"; 
import customerRoutes from "./customerRoutes.js";
 

const router = express.Router();
 
router.use("/", customerRoutes); 

export default router;
