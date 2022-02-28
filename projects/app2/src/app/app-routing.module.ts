import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductTrackingComponent} from "./product-tracking/product-tracking.component";
import {ViewReportComponent} from "./view-report/view-report.component";

const routes: Routes = [
  {path: 'app2/product-tracking', component: ProductTrackingComponent},
  {path: 'app2/view-report', component: ViewReportComponent},
  {path: 'app2', redirectTo: 'app2/one'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
