import { Router } from 'express';
import { index, createUser, readUsers, readUser, updateUser, deleteUser } from '../controllers/index.controller.js';
const router = Router();

router.get('/', index);
router.post('/users', createUser);
router.get('/users', readUsers);
router.get('/users/:id', readUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;