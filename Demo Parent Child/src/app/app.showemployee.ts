import { Component, Input, Output,  EventEmitter } from "@angular/core";



@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent{
    @Input()
    empDept_child:string;

    @Output()
    notify2:EventEmitter<string> =new EventEmitter<string>();
    //notify2 is event variable name for sending

    callingParentAddEmployee():any{
        this.notify2.emit("From Show Employee Data send..")
    }

}