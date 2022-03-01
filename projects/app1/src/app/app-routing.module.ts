import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {Product1Component} from "./product1/product1.component";
import {Product2Component} from "./product2/product2.component";

const routes: Routes = [
  {path: 'app1/product1', component: Product1Component},
  {path: 'app1/product2', component: Product2Component},
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
