import { atom } from "jotai"

export const EditProfileAtom = atom(false);
export const LoadingScreenAtom = atom(false); 

// User Session
export const sessionUser = atom({});

// Register & Enrollment Phase
export const EnrollmentPhasesAtom = atom("registration");

// StudentInfo
export const StudentRegistrationInfoAtom = atom({});