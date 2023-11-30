import * as ApplicantService from '../../src/services/applicant.service';
import pool from '../../src/repositories/database';

jest.mock('../../src/repositories/database', () => ({
    query: jest.fn()
}));

describe('ApplicantService', () => {
    it('should return a list of applicants', async () => {
        const mockApplicants = [{ id: 1, name: 'John Doe' }];
        (pool.query as jest.Mock).mockResolvedValueOnce({ rows: mockApplicants });

        const applicants = await ApplicantService.getApplicantsService();

        expect(applicants).toEqual(mockApplicants);
    });

    it('should handle the case with no applicants', async () => {
        (pool.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

        const applicants = await ApplicantService.getApplicantsService();

        expect(applicants).toEqual([]);
    });

});
