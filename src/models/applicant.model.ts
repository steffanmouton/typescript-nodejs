interface Applicant {
    nameFirst: string;
    nameLast: string;
    experience: number;
    favoriteColor: string;
    birthday: Date;
    contactPhone: string;
}

export interface ApplicantData {
    name_first: string;
    name_last: string;
    birthday: Date;
    contact_phone: string;
    favorite_color: string;
}



export default Applicant;