import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openExternal() {
    const url = window.origin + '/app2/view-report';
    window.open(url, '_blank', 'width=500, height=500');
  }

}
