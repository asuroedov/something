import express from "express";
import { addContact, getContacts } from "../controllers/contactsController";

const router = express.Router();

router.post(`/contacts`, addContact);
router.get(`/contacts`, getContacts);

export default router;
