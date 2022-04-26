import express from "express";
import { addContact, changeContact, getContacts } from "../controllers/contactsController";

const router = express.Router();

router.post(`/contacts`, addContact);
router.get(`/contacts`, getContacts);
router.put(`/contacts`, changeContact);

export default router;
