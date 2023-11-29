import { Request, Response } from 'express';
import { getApplicantsService } from '../services/applicant.service';

export async function getApplicants(req: Request, res: Response) {
    try {

        const applicants = await getApplicantsService();
        res.json(applicants);

    } catch (error) {

        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            console.error('Unknown Error Occurred');
        }

    }
}
