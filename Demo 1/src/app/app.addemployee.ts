import { Component } from "@angular/core";

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})

export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;

  empData:any[]=[
        {empId:1001,empName:"ABCD",empSalary:3333.00},
        {empId:1002,empName:"ABCDE",empSalary:3333.00},
        {empId:1003,empName:"ABCDEF",empSalary:3333.00},

    ];

   addEmployee():any{

        var ob:AddEmployeeComponent=new AddEmployeeComponent();
        ob.empId=this.empId;
        ob.empName=this.empName;
        ob.empSalary=this.empSalary;
        this.empData.push(ob);

        //alert("Employee Added..." +this.empId+" "+this.empName+" "+this.empSalary);

        for(let ob1 of this.empData)
        {
            console.log("Employee Id: "+ob.empId+" Employee Name: "+ob.empName+
            " Employee Salary: "+ob.empSalary);
        }
    }

    deleteEmployee(data:number):any{
        //pass index of that row to delete
        this.empData.splice(data,1);
        alert("delete..."+data);
    }

    updateEmployee(data:number):any{
     
    }
}

   /* template:`Employee Id is {{empId}} <br/>
    Employee Name is {{empName}} <br/><!--Component to html-->
    Employee Salary is {{empSalary}} <br/>
    {{addEmployee()}}`*/  //tagged template

    