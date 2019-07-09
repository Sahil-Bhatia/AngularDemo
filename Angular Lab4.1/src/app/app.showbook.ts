import { Component, OnInit } from "@angular/core";
import { BookService} from "./app.bookservice";

@Component({
    selector:'show-book',
    templateUrl:'showbook.html'
})


export class ShowBook implements OnInit{
    constructor(private service:BookService){}
    bookAll:any[]=[];
    ngOnInit() {
        this.service.getAllBooks().subscribe((data:any)=>this.bookAll=data);
    }


    deleteBook(index:number):any{
        var ob:any= this.bookAll.splice(index,1);
        alert("Data Deleted");
    }
}