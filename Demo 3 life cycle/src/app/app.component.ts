import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { //component life cycle
    constructor(){
        console.log("In Constructor");
    }
    ngOnInit(){
        console.log("In NgOnInit");

    }

    ngOnDestroy(){ //this will be called when another component is called from this main component
        console.log("In NgOnDestroy");
    }
}