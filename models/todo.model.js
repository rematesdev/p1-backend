import { pool } from "../database/connection.js";

const findAll = async () => {
    const {rows} = await pool.query("SELECT * FROM public.todos");
    return rows[0].title;
}
const findById = async (id) => {
    const {rows} = await pool.query("SELECT * FROM public.todos WHERE id = $1", [id]);
    return rows[0];
}

const create = async (title) => {
    const {rows} = await pool.query("INSERT INTO public.todos (title) VALUES ($1) RETURNING *", [title]);
    return rows[0];
}

export const todoModel = {
    findAll,
    findById,
    create
};