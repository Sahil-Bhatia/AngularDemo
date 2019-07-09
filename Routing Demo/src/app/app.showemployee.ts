import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";



@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})


export class ShowEmployeeComponent implements OnInit{

    constructor(private myservice:EmployeeService){}
    empAll:any[]=[];
    ngOnInit(){
        //this.myservice.getAllEmployees().subscribe((data:any)=>this.empAll=data);
        this.empAll=this.myservice.getAllEmployees();

    }
}