import { Request, Response } from 'express';
import * as ApplicantController from '../../src/controllers/applicant.controller';
import * as ApplicantService from '../../src/services/applicant.service';

jest.mock('../../src/services/applicant.service');

describe('ApplicantController', () => {
    it('getBestApplicant should return the best applicant', async () => {
        const mockApplicant = { id: 1, name: 'Steffan Mouton' };

        // Mocking the response object
        const mockRes: unknown = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        (ApplicantService.getApplicantService as jest.Mock).mockResolvedValueOnce(mockApplicant);

        await ApplicantController.getBestApplicant({} as Request, mockRes as Response);

        expect(ApplicantService.getApplicantService).toHaveBeenCalledWith(1);
        expect((mockRes as Response).json).toHaveBeenCalledWith(mockApplicant);
    });

});
