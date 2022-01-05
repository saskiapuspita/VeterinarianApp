import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers = [];
  public currentJogging: any;

  constructor(private customerService: CustomerService) { 
    customerService.get().subscribe((data: any) => this.customers = data);
  }

  ngOnInit(): void {
  }

}
