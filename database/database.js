import pg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE
};

const pool = new pg.Pool(config);

export const insertUser = async (name, email) => {
  const query = `INSERT INTO users (name, email) values ($1, $2)`;
  const values = [name, email];
  const response = await pool.query(query, values);
  return response.rows;
};

export const getUsers = async () => {
  const response = await pool.query('select * from users');
  return response.rows;
};

export const getUser = async (id) => {
  const query = `select * from users where (id = $1)`;
  const response = await pool.query(query, [id]);
  return response.rows;
};

export const updtUser = async (id, name, email) => {
  const query = `UPDATE users 
  SET name = $1, email = $2 WHERE (id = $3)`;
  const response = await pool.query(query, [name, email, id]);
  return response.rows;
};

export const delUser = async (id) => {
  const query = `delete from users where (id = $1)`;
  const response = await pool.query(query, [id]);
  return response.rows;
};