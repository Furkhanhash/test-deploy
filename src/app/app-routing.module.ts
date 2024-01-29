import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductsComponent } from './products/products/products.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';


const routes: Routes = [
 {
  path:"",
  redirectTo:"login",
  pathMatch:'full',
  

 },
 {
  path:"login",
  component:LoginComponent,
  

 },
 {
  path:'',
  component:LayoutComponent,
  children:[
   {
    path:"products",
    component:ProductsComponent
   },
   {
    path:"contact",
    component:ContactComponent
   },
   {
    path:"about",
    component:AboutComponent
   }
  ]

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
