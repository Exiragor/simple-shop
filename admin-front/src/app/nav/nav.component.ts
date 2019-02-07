import { Component, OnInit } from '@angular/core';
import { Link } from '../modules/link/Link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: Link[] = [];

  constructor() { }

  ngOnInit() {
    this.links = [
      { path: '/home', icon: 'dashboard', name: 'Main'},
      { path: '/products', icon: 'dashboard', name: 'Products'},
      { path: '/orders', icon: 'dashboard', name: 'Orders'}
    ]
  }

}
