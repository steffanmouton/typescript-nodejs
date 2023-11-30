import dotenv from 'dotenv';
dotenv.config();

import seedApplicants from './src/seeders/seedApplicants';
import {Pool} from "pg";

const setupPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '5432'),
});

const seedDatabase = async () => {
    try {
        await seedApplicants(setupPool);
        console.log('Database seeding completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
