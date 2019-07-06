import { Component } from "@angular/core";

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})

export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;

    empId_up:number;
    empName_up:string;
    empSalary_up:number;
  
  empData:any[]=[
        {empId:1001,empName:"ABCD",empSalary:3333.00},
        {empId:1004,empName:"Eil",empSalary:5000.00},
        {empId:1003,empName:"Hit",empSalary:100.00},

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
     
    updateEmployee( data_up:any):any{
        console.log(data_up);

            this.empId_up=data_up.empId;
          this.empName_up=data_up.empName;
          this.empSalary_up=data_up.empSalary;
     
        //console.log(this.empId_up+" "+this.empName_up+" "+this.empSalary_up);
    
       
       }

       updateEmployeeData(data_up:any):any{
        var ob=new AddEmployeeComponent();
        ob.empId=data_up.empId_up;
         ob.empName=data_up.empName_up;
        ob.empSalary=data_up.empSalary_up;
        var index1=this.empData.findIndex(x=>x.empId==this.empId_up);

        this.empData[index1]=(ob);
        alert("updated data");

       }


       sortId():any{
           this.empData.sort(function(a,b):any{
            if(a.empId-b.empId>0)return 1;
            else if(a.empId-b.empId<0) return -1;
            else return 0;
           });
       }

       sortName():any{
        this.empData.sort(function(a,b):any{
         if(a.empName.toLowerCase()>b.empName.toLowerCase())return 1;
         else if(a.empName.toLowerCase()<b.empName.toLowerCase()) return -1;
         else return 0;
        });
    }

    sortSalary():any{
        this.empData.sort(function(a,b):any{
         if(a.empSalary-b.empSalary>0)return 1;
         else if(a.empSalary-b.empSalary<0) return -1;
         else return 0;
        });
    }
}

   /* template:`Employee Id is {{empId}} <br/>
    Employee Name is {{empName}} <br/><!--Component to html-->
    Employee Salary is {{empSalary}} <br/>
    {{addEmployee()}}`*/  //tagged template

    