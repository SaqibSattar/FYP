import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rzp1: any;

  constructor(private auth: AuthService, private router: Router) { }

  isDisabled: boolean = true;
  ngOnInit(): void {

  }
  pay() {
     this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
     this.rzp1.open();
    this.isDisabled = false;
  }
  load() {

    this.router.navigate(['home/service/provider-list/register/date/payment/thanks']);
  }
   options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "10000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "PKR",
    "name": "Sevice Provider",
    "description": "Service charges",
    "image": "https://www.pngfind.com/pngs/m/140-1407971_back-payment-payment-icon-png-transparent-png-download.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "notes": {
        "address": "Service Provider Account"
    },
    "theme": {
        "color": "#FFD300"
    }
};

}
