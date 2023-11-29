import express from 'express';
import * as ApplicantController from '../controllers/applicant.controller';

const router = express.Router();

router.get('/applicants/', ApplicantController.getApplicants);
router.get('/applicants/:id', ApplicantController.getApplicant);
router.post('/applicants/', ApplicantController.createApplicant);
router.put('/applicants/:id', ApplicantController.updateApplicant);
router.delete('/applicants/:id', ApplicantController.deleteApplicant);

router.get('/awesome/applicant', ApplicantController.getBestApplicant);

export default router;
