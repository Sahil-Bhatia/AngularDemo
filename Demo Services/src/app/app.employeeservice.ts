import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{

    constructor(private http:HttpClient){

    }

    getAllEmployee(){
        return this.http.get("assets/employee.json");
        //In real time url="http://192.44.22.33/get" any ip address
        

    }
}