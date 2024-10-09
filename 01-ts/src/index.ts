import {readers} from "./reader";
import {borrowBook, catalog, findBook, getAvailableBooks} from "./book";

// const bookTitle = "Hamlet";
// const foundBook = findBook(catalog, bookTitle);
// //console printing
// if(foundBook){
//     console.log("Book is found!\n", JSON.stringify(foundBook,null, 2));
// }else{
//     console.log("Couldn't find the book :(\n", JSON.stringify(foundBook,null, 2));
// }
//
// const availableBooks = getAvailableBooks();
// //console printing
// if(availableBooks){
//     console.log("Available Books:");
//     for(let e of availableBooks){
//         console.log(JSON.stringify(availableBooks, null, 2));
//     }
// }

const borrow = borrowBook(catalog,"Romeo and Juliet", readers[0]);
console.log(findBook(borrow,"Romeo and Juliet"));