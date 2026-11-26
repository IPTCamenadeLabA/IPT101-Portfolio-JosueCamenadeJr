function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name, 
        id: id,
        program: program,
        yearLevel, yearLevel,
        schoolYear, schoolYear
    };
}

const myProfile = createStudentProfile(
    "Josue P. Camenade Jr.",
    6564,
    "BSIT",
    "2nd",
    "2025-2027"
);

console.log(myProfile);