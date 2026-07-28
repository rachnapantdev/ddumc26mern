import express from 'express';
import { deleteData, getAllUsers, getUsersByName, saveData } from '../controller/userController.js';
export const userRouter =  express.Router();

userRouter.get("/",getAllUsers)
userRouter.get("/:fname", getUsersByName)
userRouter.post("/save", saveData)
userRouter.delete("/remove/:id", deleteData)