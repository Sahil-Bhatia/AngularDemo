﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent } from './app.addemployee';
import { FormsModule} from '@angular/forms';
import { ShowEmployeeComponent } from './app.showemployee';

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent

		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }