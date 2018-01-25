import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";




@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
   
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_Kp0stKKT9vvUgRqGhTiIwkAR',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000 // == $20.00
    });

  }

}
