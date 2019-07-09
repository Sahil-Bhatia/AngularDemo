import { Component } from "@angular/core";


@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
    //status:boolean;
    ob:AddEmployeeComponent;
    addEmployee(){
        this.ob=new AddEmployeeComponent();
        this.ob.empId=this.empId;
        this.ob.empName=this.empName;
        this.ob.empSalary=this.empSalary;
        this.ob.empDepartment=this.empDepartment;

    }
}