import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddProductComponent } from './AddProductComponent';
import { ShowProductComponent } from './ShowProductComponent';

@NgModule({
    imports: [
        BrowserModule
        
    ],
    declarations: [
        AppComponent,
        AddProductComponent,
        ShowProductComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }