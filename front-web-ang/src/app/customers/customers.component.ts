import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers : any;
 constructor(private http : HttpClient) {
 }
 ngOnInit() {
   this.getCustomers();
 }

  getCustomers(){
    this.http.get(`${environment.apiUrl}/customer-service/customers`)
      .subscribe({
        next : value => {
          this.customers=value;
        }
      })
  }

  deleteCustomer(c: any) {
    this.http.delete(`${environment.apiUrl}/customer-service/customers/`+c.id)
      .subscribe({
        next : value => {
          this.getCustomers();
        },
        error:err => {
          //alert(JSON.stringify(err));
        }
      })
  }
}
