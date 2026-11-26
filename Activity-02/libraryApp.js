import { getBookDetails, books, printDetails } from "./bookModule.js";

console.log("=== Book Record Factory ===");
//dot notation
console.log(" Title :", books.title);
console.log(" Author :", books.author);
console.log(" Year :", books.year);

const details = getBookDetails(books);
console.log("  Extracted Details:", details);
console.log();

//test object method
console.log("Book Label Method:");
console.log(" ", books.getBook());
console.log();

//test helper funtion
console.log("Book Statuses:");
console.log(" ", printDetails(books, "Available"));
console.log(" ", printDetails(books, "Checked Out"));