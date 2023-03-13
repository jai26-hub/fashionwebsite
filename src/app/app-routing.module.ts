import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
const routes: Routes = [
  {path:'',component:CategoriesComponent
},

{
  path:'categories', component:CategoriesComponent
},
{
  path:'show',component:ShowComponent
},{
  path:'edit/:id',component:CategoriesComponent
},
{
  path:'product',component:ProductComponent
},
{
  path:'shipment',component:ShipmentComponent
}
];

@NgModule({
  imports: [ HttpClientModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
