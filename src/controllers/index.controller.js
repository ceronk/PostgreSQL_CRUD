import { getUsers, getUser, insertUser, updtUser, delUser } from '../../database/database.js';

export const index = (req, res) => {
  res.json({ "message": "Hello there!" });
};

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  await insertUser(name, email);
  res.status(200).json({ "message": "user created successfully", "body": { "name": name, "email": email } });
};

export const readUsers = async (req, res) => {
  const response = await getUsers();
  res.status(200).json(response);
};

export const readUser = async (req, res) => {
  const { id } = req.params;
  const response = await getUser(id);
  res.status(200).json(response);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await updtUser(id, name, email);
  res.status(200).json({ "message": "User updated successfully" });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await delUser(id);
  res.status(200).json({ "message": "User deleted successfully" });
};