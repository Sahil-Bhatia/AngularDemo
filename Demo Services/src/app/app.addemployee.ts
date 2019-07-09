import { Component } from "@angular/core";

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})


export class AddEmployeeComponent {

    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
    status:boolean;
    addEmployee():any{
        this.status=!status;
    }


   

  
}