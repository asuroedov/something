import express from "express";
import { addContact, changeContact, deleteContact, getContacts } from "../controllers/contactsController";

const router = express.Router();

router.post(`/contacts`, addContact);
router.get(`/contacts`, getContacts);
router.put(`/contacts`, changeContact);
router.delete(`/contacts/:phoneNumber`, deleteContact);

export default router;
