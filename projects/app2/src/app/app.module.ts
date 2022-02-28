import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductTrackingComponent} from './product-tracking/product-tracking.component';
import {ViewReportComponent} from './view-report/view-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTrackingComponent,
    ViewReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
