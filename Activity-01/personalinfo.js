const Student = {
    name: "Camenade, Josue Jr. P.",
    id: "2026-6564",
    yearLevel: "||",
    program: "Information Technology",
};

const Subjects = {
    sub1: "IPT101",
    sub2: "Event Driven Programming",
    sub3: "AppDev",
    sub4: "Networking1",
};

const grade1 = 90;
const grade2 = 85;
const grade3 = 88;
const grade4 = 92;

const totalGrades = grade1 + grade2 + grade3 + grade4;
const gwa = totalGrades / 4;

console.log("Student name: " + Student.name);
console.log("ID Number: " + Student.id);
console.log("Year Level: " + Student.yearLevel);
console.log("Program: " + Student.program);

console.log("\n= Courses Enrolled =\n");

console.log("Subject 1: " + Subjects.sub1 + " - Grade: " + grade1);
console.log("Subject 2: " + Subjects.sub2 + " - Grade: " + grade2);
console.log("Subject 3: " + Subjects.sub3 + " - Grade: " + grade3);
console.log("Subject 4: " + Subjects.sub4 + " - Grade: " + grade4);

console.log("\nGeneral Weighted Average: " + gwa);

if (gwa >= 98 && gwa <= 100) {
    console.log("Equivalent Grade: A");
} else if (gwa >= 95 && gwa < 98) {
    console.log("Equivalent Grade: A-");
} else if (gwa >= 92 && gwa < 95) {
    console.log("Equivalent Grade: B+");
} else if (gwa >= 89 && gwa < 92) {
    console.log("Equivalent Grade: B");
} else if (gwa >= 86 && gwa < 89) {
    console.log("Equivalent Grade: B-");
} else if (gwa >= 83 && gwa < 86) {
    console.log("Equivalent Grade: C+");
} else if (gwa >= 80 && gwa < 83) {
    console.log("Equivalent Grade: C");
} else if (gwa >= 77 && gwa < 80) {
    console.log("Equivalent Grade: C-");
} else if (gwa >= 75 && gwa < 77) {
    console.log("Equivalent Grade: D");
} else if (gwa >= 71 && gwa < 75) {
    console.log("Equivalent Grade: F");
}