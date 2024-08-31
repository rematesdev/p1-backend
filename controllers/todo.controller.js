import { todoModel } from "../models/todo.model.js";

const getAll = async (_,res) => {
    try {
        const response = await todoModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const getById = async (req,res) => {
    try {
        const {id} = req.params;
        const response = await todoModel.findById(id);
        res.json(response);
    } catch (error) {
        console.error(`No se pudo encontrar el id: ${id}`, error);
    }  
};

const createTitle = async (req,res) => {
    try {
        const {title} = req.body;
        const response = await todoModel.create(title);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const todoController = {
    getAll,
    getById,
    createTitle
};