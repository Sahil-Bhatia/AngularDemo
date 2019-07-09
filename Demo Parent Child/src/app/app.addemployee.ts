import { Component,Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{
    @Input() //to fetch data from parent
    inchild:string;
    @Output()
    notify:EventEmitter<string>=new EventEmitter<string>();
    //notify is any variable name for event

    empDept:string="HR";
    callingParent():any{
        this.notify.emit("From child... data send");
    }

    message:string;

    getDataFromChild(msg){
        this.message=msg;
    }
}