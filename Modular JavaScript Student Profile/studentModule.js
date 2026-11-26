export const studentDetails = {
    name: "Josue P. Camenade Jr.",
    id: 6564,
    program: "BSIT",
    yearLevel: "2nd",
    schoolYear: "2026-2027"
};

export function printSummary(student, status) {
    return 'Student ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${student.status}';
}