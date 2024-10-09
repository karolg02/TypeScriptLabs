import {Book, Reader} from "./types";
import {readers} from "./reader";

export const catalog: Book[] = [
    {
        title: "Hamlet",
        author: "William Shakespeare",
        year: 1623,
        borrower: null,
        isBorrowed: false,
    },
    {
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        year: 1597,
        borrower: null,
        isBorrowed: false,
    },
    {
        title: "Julius Caesar",
        author: "William Shakespeare",
        year: 1599,
        borrower: null,
        isBorrowed: true,
    }
];

export function findBook(catalog: Book[], bookTitle: string){
    return catalog.find(book=>book.title === bookTitle);
}

export function getAvailableBooks(){
    return catalog.filter(book=>!book.isBorrowed);
}

export function borrowBook(catalog: Book[], bookTitle: string, reader: Reader): Book[] {
    return catalog.map(book=>{
        if((book.title === bookTitle) && (!book.isBorrowed)){
            return {
                ...book,
                isBorrowed: true,
                borrower: reader
            };
        }
        return book;
    });
}