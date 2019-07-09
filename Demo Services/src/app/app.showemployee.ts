import { Component, OnInit, Input, SimpleChange } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";

@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})


export class ShowEmployee implements OnInit{


    constructor(private service:EmployeeService){}
    empAll:any[]=[];

    @Input()
    empId:number;
    @Input()
    empName:string;
    @Input()
    empSalary:number;
    @Input()
    empDepartment:string;
    @Input()
    status:boolean;

    ngOnInit() {
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    }
    
    ngOnChanges(change:SimpleChange){
        console.log(status)
        if(change['status']){
            console.log(status)
            if(this.empId!=null){
                console.log(this.empId);
                this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
            }
        }
    }

    deleteEmployee(index:number):any{
        var ob:any= this.empAll.splice(index,1);
        alert("Data Deleted");
    }

}