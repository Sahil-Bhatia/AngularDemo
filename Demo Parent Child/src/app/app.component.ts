import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    empName:string="Capgemini...";

    message:string;

    getDataFromChild(msg){
        this.message=msg;
    }
}