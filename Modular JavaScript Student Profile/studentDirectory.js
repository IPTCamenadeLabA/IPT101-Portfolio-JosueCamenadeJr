const studentRecord = {
    name: "Josue P. Camenade Jr.",
    id: 6564,
    program: "2nd",
    schoolYear: "2026-2027",

    getEnrollmentDetails(semester, campus) {
        return '[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.yearLevel})'
    }
};

console.log(studentRecord.getEnrollmentDetails("1st Semester", "Main Campus"));