import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";


@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent{
    searchId:number;
    searchvalue:string;
    constructor(private myservice:EmployeeService)
    {

    }
    empAll:any[]=null;
    search():any{
            this.empAll=this.myservice.searchEmployee(this.searchId)
        if(this.empAll.length!=0){
            for(let i of this.empAll)
            this.searchvalue=""+i.empId+" "+i.empName+" "+i.empSalary+" "+i.empDepartment;

        }else{
            this.searchvalue="Employee Not Found"
        }
    }
}