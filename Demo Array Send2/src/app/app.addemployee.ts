import { Component } from "@angular/core";

@Component({
    selector:'addemp',
    templateUrl:'app.addemployee.html'
})

export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;
    empDept:string;
    empDoj:Date;
    status:boolean=false;
    empData:any[]=[];
    empId_up:number;
    empName_up:string;
    empSalary_up:number;
    addEmployee():any{

        this.empData.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});
        this.status=true;

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
        alert("Data Updated: "+ob.empId+" "+ ob.empName+" "+ob.empSalary);

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