import express from 'express';
import { getApplicants } from '../controllers/applicant.controller';

const router = express.Router();

router.get('/applicants', getApplicants);


export default router;
