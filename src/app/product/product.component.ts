import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { classname } from '../class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   obj:classname = new classname;
    arrproduct:classname[]=[];
  id: any;
  // CategoriseName = [
  //   { model: "vivoy20"},
  //   {model : "Fiat 500",}
    
  // ];
  ProductPrice = [
    { price: "2000"},
    {price : "4000",}
   
  ];
  ProductName = [
    { product: "product1"},
    {product : "product2",}
   
  ];
  constructor(public s:ApiService,public router:Router ) { 
     
  }

  ngOnInit(): void {
  }
  ProductAdd()
  {
  //  this.CategoriseName
    this.s.arrservice.push(this.obj) 
    
    this.obj=new classname;
    console.log(this.obj.categoryname)
    console.log(" data added")

    
  }

}
