import { Component, Input, OnInit } from '@angular/core';
//import { ApiService } from '../api.service';
//import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customers = [];
  
  constructor() { 
  }

  ngOnInit() { 
  }
}
