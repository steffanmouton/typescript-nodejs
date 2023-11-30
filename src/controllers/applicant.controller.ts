import { Request, Response } from 'express';
import {
    getApplicantsService,
    getApplicantService,
    createApplicantService,
    updateApplicantService,
    deleteApplicantService
} from '../services/applicant.service';
import { ApplicantData } from '../models/applicant.model';

// Get all applicants
export const getApplicants = async (req: Request, res: Response) => {
    try {
        const applicants = await getApplicantsService();
        res.json(applicants);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
    }
};

// Get a single applicant by ID
export const getApplicant = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const applicant = await getApplicantService(id);
        if (applicant) {
            res.json(applicant);
        } else {
            res.status(404).send('Applicant not found');
        }
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
    }
};

// As requested by the problem statement. This returns the applicant with id of 1, which is Steffan Mouton, who is the best applicant, of course.
export const getBestApplicant = async (req: Request, res: Response) => {
    try {
        const applicant = await getApplicantService(1);
        if (applicant) {
            res.json(applicant);
        } else {
            res.status(404).send('Applicant not found');
        }
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
    }
}

// Create a new applicant
export const createApplicant = async (req: Request, res: Response) => {
    try {
        const applicantData: ApplicantData = req.body;
        const newApplicant = await createApplicantService(applicantData);
        res.status(201).json(newApplicant);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
    }
};

// Update an existing applicant
export const updateApplicant = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const applicantData: ApplicantData = req.body;
        const updatedApplicant = await updateApplicantService(id, applicantData);
        if (updatedApplicant) {
            res.json(updatedApplicant);
        } else {
            res.status(404).send('Applicant not found');
        }
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
    }
};

// Delete an applicant
export const deleteApplicant = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await deleteApplicantService(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
    }
};
