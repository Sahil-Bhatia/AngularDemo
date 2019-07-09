import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ShowBook } from './app.showbook';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,ShowBook
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }