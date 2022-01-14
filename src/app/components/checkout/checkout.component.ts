import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper, MatStepperNext } from '@angular/material/stepper';
import { BackendService } from 'src/app/services/backend.service';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { months, years } from '../../helpers/datetime-helper';
import { formatNumber } from '@angular/common';

declare var Accept: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  data: any;
  stepperOrientation: any = 'horizontal'
  selectedVehicle: any;
  payload: any;
  months: any = months();
  years: any = years(10);
  booking: any;
  paying: boolean = false;
  vehicleForm: FormGroup = new FormGroup({
    vehicle: new FormControl('', [Validators.required])
  });
  contactForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')]),
    instructions: new FormControl(''),
  });
  paymentForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    month: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
    year: new FormControl('', [Validators.required, Validators.min(new Date().getFullYear())]),
    cardCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private backend: BackendService) { }

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.data = history.state.data
    // = {
    //   "distance": {
    //     "text": "1,331 mi",
    //     "value": 2142187
    //   },
    //   "duration": {
    //     "text": "19 hours 57 mins",
    //     "value": 71815
    //   },
    //   "destination_address": "New York Botanical Garden, 2900 Southern Blvd, Bronx, NY 10458, USA",
    //   "origin_address": "Louis Armstrong New Orleans International Airport (MSY), Louis Armstrong New Orleans International Airport, 1 Terminal Dr, Kenner, LA 70062, USA",
    //   "date": "2021-11-29T18:30:00.000Z",
    //   "time": "12:09 PM",
    //   "rideType": "from-airport",
    //   "toll_price": 0,
    //   "rush_hour_price": 0,
    //   "vehicles": [
    //     {
    //       "total_fare": 22502,
    //       "id": "xuv_300",
    //       "name": "XUV 300",
    //       "photos": [
    //         {
    //           "filename": "xuv_300_1636292755646.jpeg",
    //           "size": 476211,
    //           "mimetype": "image/jpeg",
    //           "path": "http://localhost:4000/images/xuv_300/xuv_300_1636292755646.jpeg"
    //         },
    //         {
    //           "filename": "xuv_300_1636292755653.png",
    //           "size": 574743,
    //           "mimetype": "image/png",
    //           "path": "http://localhost:4000/images/xuv_300/xuv_300_1636292755653.png"
    //         }
    //       ],
    //       "passenger_capacity": 5,
    //       "child_seat_capacity": 2,
    //       "luggage_capacity": 5
    //     },
    //     {
    //       "total_fare": 19870,
    //       "id": "xuv_500",
    //       "name": "XUV 500",
    //       "photos": [
    //         {
    //           "filename": "xuv_500_1636292504579.png",
    //           "size": 141932,
    //           "mimetype": "image/png",
    //           "path": "http://localhost:4000/images/xuv_500/xuv_500_1636292504579.png"
    //         },
    //         {
    //           "filename": "xuv_500_1636292504583.png",
    //           "size": 134552,
    //           "mimetype": "image/png",
    //           "path": "http://localhost:4000/images/xuv_500/xuv_500_1636292504583.png"
    //         }
    //       ],
    //       "passenger_capacity": 5,
    //       "child_seat_capacity": 2,
    //       "luggage_capacity": 5
    //     },
    //     {
    //       "total_fare": 33225,
    //       "id": "rolls_royce",
    //       "name": "Rolls Royce",
    //       "photos": [
    //         {
    //           "filename": "rolls_royce_1636297450646.jpg",
    //           "size": 172838,
    //           "mimetype": "image/jpeg",
    //           "path": "http://localhost:4000/images/rolls_royce/rolls_royce_1636297450646.jpg"
    //         },
    //         {
    //           "filename": "rolls_royce_1636297450649.jpg",
    //           "size": 73681,
    //           "mimetype": "image/jpeg",
    //           "path": "http://localhost:4000/images/rolls_royce/rolls_royce_1636297450649.jpg"
    //         }
    //       ],
    //       "passenger_capacity": 6,
    //       "child_seat_capacity": 3,
    //       "luggage_capacity": 6
    //     }
    //   ]
    // }
    // this.selectedVehicle = this.data.vehicles[0]
    if (!history.state.data) {
      alert('No data passed')
      this.router.navigateByUrl('/')
    }

  }

  async makePayment() {
    if (this.paymentForm.invalid) {
      alert('Please fill card details correctly')
      return
    }
    this.paying = true;
    Accept.dispatchData({
      authData: {
        clientKey: environment.authorizenet_client_id,
        apiLoginID: environment.authorizenet_api_login_id,
      },
      cardData: { ...this.paymentForm.value }
    }, (res) => {
      this.payload = {
        ..._.omit(this.data, ['vehicles']),
        opaqueData: res.opaqueData,
        vehicle_details: _.omit(this.vehicleForm.get('vehicle').value, ['photos']),
        contact_details: {
          ...this.contactForm.value,
          card_number: this.paymentForm.get('cardNumber').value,
          exp: this.paymentForm.get('month').value + this.paymentForm.get('year').value.toString().slice(-2)
        },

      }

      if (res.messages.resultCode === 'Ok') {
        this.backend.createBooking(this.payload).toPromise().then(res => {
          console.log(res)
          this.booking = res
          this.paymentForm.patchValue({ status: true })
          this.stepper.next()
        })
          .catch(err => {
            alert(err.error)
            console.log(err)
          }).finally(() => this.paying = false)
      }
      else {
        alert(res.messages.message[0].text)
        this.paying = false
      }
    })

  }

  toggleVehicle(vehicle) {
    if (this.selectedVehicle?.name === vehicle.name) {
      this.selectedVehicle = null;
      this.vehicleForm.patchValue({ vehicle: null })
    }
    else {
      this.selectedVehicle = { ...vehicle }
      this.vehicleForm.patchValue({ vehicle: this.selectedVehicle })

    }

  }

  assignChildSeats(e) {
    this.selectedVehicle.child_seats = e.value || 0;

  }

  generateChildSeats(n) {
    return new Array(n).fill(0);

  }

  toggleExtras(ele: HTMLDivElement, arrow: HTMLElement) {
    if (ele.classList.contains('extras-active')) {
      ele.classList.remove('extras-active')
      arrow.style.transform = 'rotate(0deg)'
    }
    else {
      ele.classList.add('extras-active')
      arrow.style.transform = 'rotate(180deg)'

    }

  }


  getDate(date) {
    return new Date(date).toDateString()
  }

  getTotalFare(formatted?: boolean) {
    const price = ((this.data.toll_price || 0) + (this.data.rush_hour_price || 0) + (this.selectedVehicle?.total_fare || 0) + (this.selectedVehicle?.child_seats || 0) * 5) || 0
    return formatted ? formatNumber(price, null, '1.2-2') : price
  }

  test(e) {
    console.log(e);


  }

}
