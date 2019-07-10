import { Component, OnInit, SimpleChange } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";



@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})


export class ShowEmployeeComponent {

    constructor(private myservice:EmployeeService){

        console.log("In show constructor")
      this.empAll=myservice.getAllEmployees();
    }
    empAll:any[]=[];
  /*  ngOnInit(){
        //this.myservice.getAllEmployees().subscribe((data:any)=>this.empAll=data);
        //this.empAll=this.myservice.getAllEmployees();
        this.myservice.subject.subscribe((data:any)=>{
            console.log("hello in subject subscribe");
        console.log(data)
        this.empAll=data});
    }
*/
}