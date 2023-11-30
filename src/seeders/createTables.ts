import dotenv from 'dotenv';
dotenv.config();

import {Pool} from "pg";

const createApplicantsTable = `
CREATE TABLE IF NOT EXISTS applicants (
    id SERIAL PRIMARY KEY,
    name_first VARCHAR(255) NOT NULL,
    name_last VARCHAR(255) NOT NULL,
    favorite_color VARCHAR(50),
    birthday DATE,
    contact_phone VARCHAR(50)
);
`;


const setupPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '5432'),
});

export const setupDatabase = async () => {
    try {
        await setupPool.query(createApplicantsTable);
        console.log('Applicants table created successfully.');
    } catch (error) {
        console.error('Error setting up the database:', error);
    }
};
