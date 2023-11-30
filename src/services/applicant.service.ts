// src/services/applicant.service.ts

import pool from '../repositories/database';
import {ApplicantData} from "../models/applicant.model";
import {Application} from "express";

//CRUD Services for the Applicant model

export const getApplicantsService = async () => {
    const result = await pool.query('SELECT * FROM applicants');
    return result.rows;
};

export const getApplicantService = async (id: number) => {
    const result = await pool.query('SELECT * FROM applicants WHERE id = $1', [id]);
    return result.rows[0];
};

export const createApplicantService = async (applicantData: ApplicantData) => {
    const { name_first, name_last, birthday, contact_phone, favorite_color } = applicantData;
    const result = await pool.query(
        'INSERT INTO applicants (name_first, name_last, birthday, contact_phone, favorite_color) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name_first, name_last, birthday, contact_phone, favorite_color]
    );
    return result.rows[0];
};

export const updateApplicantService = async (id: number, applicantData: ApplicantData) => {
    const { name_first, name_last, birthday, contact_phone, favorite_color } = applicantData;
    const result = await pool.query(
        'UPDATE applicants SET name_first = $1, name_last = $2, birthday = $3, contact_phone = $4, favorite_color = $5 WHERE id = $6 RETURNING *',
        [name_first, name_last, birthday, contact_phone, favorite_color, id]
    );
    return result.rows[0];
};

export const deleteApplicantService = async (id: number) => {
    await pool.query('DELETE FROM applicants WHERE id = $1', [id]);
};
