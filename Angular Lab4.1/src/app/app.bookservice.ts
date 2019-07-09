import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class BookService{

    constructor(private http:HttpClient){

    }

    getAllBooks(){
        return this.http.get("assets/booklist.json");
        //In real time url="http://192.44.22.33/get" any ip address
        

    }
}