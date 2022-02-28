import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';

  openExternal() {
    const url = window.origin + '/app2/product-tracking';
    window.open(url, '_blank', 'width=500, height=500');
  }
}
