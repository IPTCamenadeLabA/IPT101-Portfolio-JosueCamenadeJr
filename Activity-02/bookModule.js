export const books = {
  title: "Jane Austen",
  author: "Pride and Prejudice",
  year: 1813,
  getBook() {
    return '${this.title} by ${this.author} (${this.year})';
  }
};

export function getBookDetails(bookObj) {
  return {
    title: bookObj.title,
    author: bookObj.author,
    year: bookObj.year,
  };
}

export function printDetails(bookObj, status){
  return '[Status: ${status}] ${bookObj,getBookDetails()}';
}