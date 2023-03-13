import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { classname } from '../class';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  obj:classname = new classname();

  isEdit:boolean=false;

     logarr:classname[]=[];
    index:any;

    

    id:any;
    
  constructor(public rout:ActivatedRoute, public router:Router, public s:ApiService,public r:ActivatedRoute ) { 
  this.id =  this.r.snapshot.paramMap.get("id");
  if(this.id != null){
  
    this.logarr=this.s.arrservice;

    this.obj.categoryid = this.logarr[this.id].categoryid ;
    this.obj.categoryname = this.logarr[this.id].categoryname ;

    console.log(this.id);

    this.isEdit=true;


  }
 
}

  ngOnInit(): void {
  }

  CategoryAdd()
  {

    if(this.isEdit){

      this.logarr[this.id] = this.obj;
      this.obj=new classname();
      this.router.navigate(['/show']);

    } else if(this.obj.categoryid&&this.obj.categoryname)
    {
      this.s.arrservice.push(this.obj)  
      this.obj=new classname();
      this.router.navigate(['/show']);
      console.log("Add Category successful");

    }
    else{
      alert("empty not allowed");
    }
  }
  ShipmentAddress(){
    this.router.navigate(['/shipment']);
    }
  

}
