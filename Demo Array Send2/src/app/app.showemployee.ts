import { Component, Input } from "@angular/core";
import { AddEmployeeComponent } from "./app.addemployee";

@Component({
    selector:'showemp',
    templateUrl:'app.showemployee.html'
})



export class ShowEmployeeComponent{
   
    @Input()
    empData:any[];
   
}