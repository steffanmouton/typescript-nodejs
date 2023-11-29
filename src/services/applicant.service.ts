import pool from '../repositories/database';

export async function getApplicantsService() {
    const result = await pool.query('SELECT * FROM applicants');
    return result.rows;
}
