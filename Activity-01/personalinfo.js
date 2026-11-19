
let bsit_students = {
    student1: {
        name: "Camenade, Josue Jr. P.",
        id: "2026-6564",
        yearLevel: "||",
        program: "Information Technology",
    },

    student2: {
        name: "Derder, Mexandryl",
        id: "2026-6969",
        yearLevel: "||",
        program: "Information Technology",
    },

    student3: {
        name: "Ortega, Ezra.",
        id: "2026-6974",
        yearLevel: "||",
        program: "Information Technology",
    },

    student4: {
        name: "Galvadores, Pj",
        id: "2026-6967",
        yearLevel: "||",
        program: "Information Technology",
    },

    Subjects: {
        sub1: "IPT101",
        sub2: "Event Driven Programming",
        sub3: "AppDev",
        sub4: "Networking1",
    },

    Stud1Grades: {
        grade1: 95,
        grade2: 90,
        grade3: 92,
        grade4: 88,
    },

    Stud2Grades: {
        grade1: 90,
        grade2: 92,
        grade3: 88,
        grade4: 85,
    },

    Stud3Grades: {
        grade1: 88,
        grade2: 85,
        grade3: 90,
        grade4: 92,
    },  

    Stud4Grades: {
        grade1: 92,
        grade2: 88,
        grade3: 85,
        grade4: 90,
    }

};

const totalGrades = {
    stud1totalGrades: {
        grade1: bsit_students.Stud1Grades.grade1,
        grade2: bsit_students.Stud1Grades.grade2,
        grade3: bsit_students.Stud1Grades.grade3,
        grade4: bsit_students.Stud1Grades.grade4
    },

    stud2totalGrades: {
        grade1: bsit_students.Stud2Grades.grade1,
        grade2: bsit_students.Stud2Grades.grade2,
        grade3: bsit_students.Stud2Grades.grade3,
        grade4: bsit_students.Stud2Grades.grade4
    },

    stud3totalGrades: {
        grade1: bsit_students.Stud3Grades.grade1,
        grade2: bsit_students.Stud3Grades.grade2,
        grade3: bsit_students.Stud3Grades.grade3,
        grade4: bsit_students.Stud3Grades.grade4
    },

    stud4totalGrades: {
        grade1: bsit_students.Stud4Grades.grade1,
        grade2: bsit_students.Stud4Grades.grade2,
        grade3: bsit_students.Stud4Grades.grade3,
        grade4: bsit_students.Stud4Grades.grade4
    }
};



const gwa = {
    stud1gwa: (totalGrades.stud1totalGrades.grade1 + totalGrades.stud1totalGrades.grade2 + totalGrades.stud1totalGrades.grade3 + totalGrades.stud1totalGrades.grade4) / 4,
    stud2gwa: (totalGrades.stud2totalGrades.grade1 + totalGrades.stud2totalGrades.grade2 + totalGrades.stud2totalGrades.grade3 + totalGrades.stud2totalGrades.grade4) / 4,
    stud3gwa: (totalGrades.stud3totalGrades.grade1 + totalGrades.stud3totalGrades.grade2 + totalGrades.stud3totalGrades.grade3 + totalGrades.stud3totalGrades.grade4) / 4,
    stud4gwa: (totalGrades.stud4totalGrades.grade1 + totalGrades.stud4totalGrades.grade2 + totalGrades.stud4totalGrades.grade3 + totalGrades.stud4totalGrades.grade4) / 4
} 

console.log("Student name: " + bsit_students.student1.name);
console.log("ID Number: " + bsit_students.student1.id);
console.log("Year Level: " + bsit_students.student1.yearLevel);
console.log("Program: " + bsit_students.student1.program);

console.log("\n= Courses Enrolled =\n");

console.log("Subject 1: " + bsit_students.Subjects.sub1 + " - Grade: " + totalGrades.stud1totalGrades.grade1);
console.log("Subject 2: " + bsit_students.Subjects.sub2 + " - Grade: " + totalGrades.stud1totalGrades.grade2);
console.log("Subject 3: " + bsit_students.Subjects.sub3 + " - Grade: " + totalGrades.stud1totalGrades.grade3);
console.log("Subject 4: " + bsit_students.Subjects.sub4 + " - Grade: " + totalGrades.stud1totalGrades.grade4);

console.log("\nGeneral Weighted Average: " + gwa.stud1gwa);

if (gwa.stud1gwa >= 98 && gwa.stud1gwa <= 100) {
    console.log("Equivalent Grade: A");
} else if (gwa.stud1gwa >= 95 && gwa.stud1gwa < 98) {
    console.log("Equivalent Grade: A-");
} else if (gwa.stud1gwa >= 92 && gwa.stud1gwa < 95) {
    console.log("Equivalent Grade: B+");
} else if (gwa.stud1gwa >= 89 && gwa.stud1gwa < 92) {
    console.log("Equivalent Grade: B");
} else if (gwa.stud1gwa >= 86 && gwa.stud1gwa < 89) {
    console.log("Equivalent Grade: B-");
} else if (gwa.stud1gwa >= 83 && gwa.stud1gwa < 86) {
    console.log("Equivalent Grade: C+");
} else if (gwa.stud1gwa >= 80 && gwa.stud1gwa < 83) {
    console.log("Equivalent Grade: C");
} else if (gwa.stud1gwa >= 77 && gwa.stud1gwa < 80) {
    console.log("Equivalent Grade: C-");
} else if (gwa.stud1gwa >= 75 && gwa.stud1gwa < 77) {
    console.log("Equivalent Grade: D");
} else if (gwa.stud1gwa >= 71 && gwa.stud1gwa < 75) {
    console.log("Equivalent Grade: F");
}

console.log("\n=====================================");
console.log("=============Student2==================\n");


console.log("Student name: " + bsit_students.student2.name);
console.log("ID Number: " + bsit_students.student2.id);
console.log("Year Level: " + bsit_students.student2.yearLevel);
console.log("Program: " + bsit_students.student2.program);

console.log("\n= Courses Enrolled =\n");

console.log("Subject 1: " + bsit_students.Subjects.sub1 + " - Grade: " + totalGrades.stud2totalGrades.grade1);
console.log("Subject 2: " + bsit_students.Subjects.sub2 + " - Grade: " + totalGrades.stud2totalGrades.grade2);
console.log("Subject 3: " + bsit_students.Subjects.sub3 + " - Grade: " + totalGrades.stud2totalGrades.grade3);
console.log("Subject 4: " + bsit_students.Subjects.sub4 + " - Grade: " + totalGrades.stud2totalGrades.grade4);

console.log("\nGeneral Weighted Average: " + gwa.stud2gwa);

if (gwa.stud2gwa >= 98 && gwa.stud2gwa <= 100) {
    console.log("Equivalent Grade: A");
} else if (gwa.stud2gwa >= 95 && gwa.stud2gwa < 98) {
    console.log("Equivalent Grade: A-");
} else if (gwa.stud2gwa >= 92 && gwa.stud2gwa < 95) {
    console.log("Equivalent Grade: B+");
} else if (gwa.stud2gwa >= 89 && gwa.stud2gwa < 92) {
    console.log("Equivalent Grade: B");
} else if (gwa.stud2gwa >= 86 && gwa.stud2gwa < 89) {
    console.log("Equivalent Grade: B-");
} else if (gwa.stud2gwa >= 83 && gwa.stud2gwa < 86) {
    console.log("Equivalent Grade: C+");
} else if (gwa.stud2gwa >= 80 && gwa.stud2gwa < 83) {
    console.log("Equivalent Grade: C");
} else if (gwa.stud2gwa >= 77 && gwa.stud2gwa < 80) {
    console.log("Equivalent Grade: C-");
} else if (gwa.stud2gwa >= 75 && gwa.stud2gwa < 77) {
    console.log("Equivalent Grade: D");
} else if (gwa.stud2gwa >= 71 && gwa.stud2gwa < 75) {
    console.log("Equivalent Grade: F");
}

console.log("\n=====================================");
console.log("=============Student3==================\n");


console.log("Student name: " + bsit_students.student3.name);
console.log("ID Number: " + bsit_students.student3.id);
console.log("Year Level: " + bsit_students.student3.yearLevel);
console.log("Program: " + bsit_students.student3.program);

console.log("\n= Courses Enrolled =\n");

console.log("Subject 1: " + bsit_students.Subjects.sub1 + " - Grade: " + totalGrades.stud3totalGrades.grade1);
console.log("Subject 2: " + bsit_students.Subjects.sub2 + " - Grade: " + totalGrades.stud3totalGrades.grade2);
console.log("Subject 3: " + bsit_students.Subjects.sub3 + " - Grade: " + totalGrades.stud3totalGrades.grade3);
console.log("Subject 4: " + bsit_students.Subjects.sub4 + " - Grade: " + totalGrades.stud3totalGrades.grade4);

console.log("\nGeneral Weighted Average: " + gwa.stud3gwa);

if (gwa.stud3gwa >= 98 && gwa.stud3gwa <= 100) {
    console.log("Equivalent Grade: A");
} else if (gwa.stud3gwa >= 95 && gwa.stud3gwa < 98) {
    console.log("Equivalent Grade: A-");
} else if (gwa.stud3gwa >= 92 && gwa.stud3gwa < 95) {
    console.log("Equivalent Grade: B+");
} else if (gwa.stud3gwa >= 89 && gwa.stud3gwa < 92) {
    console.log("Equivalent Grade: B");
} else if (gwa.stud3gwa >= 86 && gwa.stud3gwa < 89) {
    console.log("Equivalent Grade: B-");
} else if (gwa.stud3gwa >= 83 && gwa.stud3gwa < 86) {
    console.log("Equivalent Grade: C+");
} else if (gwa.stud3gwa >= 80 && gwa.stud3gwa < 83) {
    console.log("Equivalent Grade: C");
} else if (gwa.stud3gwa >= 77 && gwa.stud3gwa < 80) {
    console.log("Equivalent Grade: C-");
} else if (gwa.stud3gwa >= 75 && gwa.stud3gwa < 77) {
    console.log("Equivalent Grade: D");
} else if (gwa.stud3gwa >= 71 && gwa.stud3gwa < 75) {
    console.log("Equivalent Grade: F");
}

console.log("\n=====================================");
console.log("=============Student4==================\n");


console.log("Student name: " + bsit_students.student4.name);
console.log("ID Number: " + bsit_students.student4.id);
console.log("Year Level: " + bsit_students.student4.yearLevel);
console.log("Program: " + bsit_students.student4.program);

console.log("\n= Courses Enrolled =\n");

console.log("Subject 1: " + bsit_students.Subjects.sub1 + " - Grade: " + totalGrades.stud4totalGrades.grade1);
console.log("Subject 2: " + bsit_students.Subjects.sub2 + " - Grade: " + totalGrades.stud4totalGrades.grade2);
console.log("Subject 3: " + bsit_students.Subjects.sub3 + " - Grade: " + totalGrades.stud4totalGrades.grade3);
console.log("Subject 4: " + bsit_students.Subjects.sub4 + " - Grade: " + totalGrades.stud4totalGrades.grade4);

console.log("\nGeneral Weighted Average: " + gwa.stud4gwa);

if (gwa.stud4gwa >= 98 && gwa.stud4gwa <= 100) {
    console.log("Equivalent Grade: A");
} else if (gwa.stud4gwa >= 95 && gwa.stud4gwa < 98) {
    console.log("Equivalent Grade: A-");
} else if (gwa.stud4gwa >= 92 && gwa.stud4gwa < 95) {
    console.log("Equivalent Grade: B+");
} else if (gwa.stud4gwa >= 89 && gwa.stud4gwa < 92) {
    console.log("Equivalent Grade: B");
} else if (gwa.stud4gwa >= 86 && gwa.stud4gwa < 89) {
    console.log("Equivalent Grade: B-");
} else if (gwa.stud4gwa >= 83 && gwa.stud4gwa < 86) {
    console.log("Equivalent Grade: C+");
} else if (gwa.stud4gwa >= 80 && gwa.stud4gwa < 83) {
    console.log("Equivalent Grade: C");
} else if (gwa.stud4gwa >= 77 && gwa.stud4gwa < 80) {
    console.log("Equivalent Grade: C-");
} else if (gwa.stud4gwa >= 75 && gwa.stud4gwa < 77) {
    console.log("Equivalent Grade: D");
} else if (gwa.stud4gwa >= 71 && gwa.stud4gwa < 75) {
    console.log("Equivalent Grade: F");
}

