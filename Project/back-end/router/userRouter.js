import express from 'express';
import { deleteData, getAllUsers, saveData } from '../controller/userController.js';
export const userRouter =  express.Router();

userRouter.get("/",getAllUsers)
userRouter.post("/save", saveData)
userRouter.delete("/remove/:id", deleteData)