
import applicantsData from './data/applicantsData';
import {Pool} from "pg";

const seedApplicants = async (pool: Pool) => {
    for (const applicant of applicantsData) {
        await pool.query(
            'INSERT INTO applicants (name_first, name_last, favorite_color, birthday, contact_phone) VALUES ($1, $2, $3, $4, $5)',
            [applicant.nameFirst, applicant.nameLast, applicant.favoriteColor, applicant.birthday, applicant.contactPhone]
        );
    }
    console.log('Applicants data seeded successfully');
};

export default seedApplicants;
