import { Component } from "@angular/core";

@Component({
    selector:'add-prod',
    templateUrl:'addproduct.html'
})

export class AddProductComponent{
    prodId:number;
    prodName:string;
    prodCost:number;
    prodOnline:string;
    prodCategory:string;
    prodStores:any[]=[];
    prodAll:any[]=[];


    addProduct():any{
        this.prodAll.push({prodId:this.prodId,prodName:this.prodName,prodCost:this.prodCost,prodOnline:this.prodOnline,prodCategory:this.prodCategory})
    }
}