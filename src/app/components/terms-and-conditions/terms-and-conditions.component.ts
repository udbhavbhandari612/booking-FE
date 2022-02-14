import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  contents: any[] = [
    { header: 'Waiting Time', content: `Wait time charges are $55 per hour (For Sedans), $75 per hour (For SUVs) on all wait times that occur after the given free grace Period has elapsed.\n\nOur state of the art reservation and dispatch software automatically checks and updates all incoming flight arrivals for all of Airport pickups which is instantly updated on the chauffeur end for the accuracy and avoidance of wait time charges.` },
    { header: 'Grace Periods Are', content: `10 minutes on all local reservations.\n\n30 minutes on all Airport domestic flights.\n\n60 minutes on all Airport international flights.` },
    { header: 'Cancellation Policy', content: `20% Deposit is NON-Refundable on all reservations.\n1. For Sedan and SUV Reservations we require 2 hours advance cancellations or reservation will be due in full, As for out of town pickups if the vehicle is already on the way then it’s a full charge if it’s not then its only 20% Cancellation.\n2. For VAN Reservations we require 24 hours advance cancellation or balances are due in full.\n3. For Stretch Limos and Buses (OTHER THAN PROMS & WEDDING RESERVATIONS) we require 72 hours advance cancellation or balances are due in full.` },
    { header: 'Proms and Weddings', content: `1. 20% NON REFUNDABLE deposit is required for all Prom and Wedding reservations.\n2. All Balances must be paid in full two weeks prior to the event (Cash, Check or money order) or the reservation will be automatically canceled without notice.\n3. Cancellations must be done two weeks prior to the event date or balances are due in full.` },
    { header: 'No Show Charges for Sedans', content: `If fifteen minutes or more have elapsed from the dispatch and the passenger calls dispatch office or the car has arrived and the passenger goes out to the driver to tell him/her that the job is canceled that is considered a billable no show which is a full fare charge.\n\nIf customer did not show for his pick-up or called to cancel we will hold the car for 60 minutes and will try to contact the passenger during that time unless the customer authorized waiting time we will hold the car until the authorized wait time expires if no contact is made we will release the vehicle and it will be considered a billable no show which is a full fare charge Plus the wait time.` },
    { header: 'Our Policy', content: `1. The client assumes full financial liability for any damage to the limousine caused during the duration of the rental by them or any members of their party.\n2. The sanitation fee is $250.00.Only charged in case of (Smoking, Vomiting or Trashing the limo) NO Exceptions.\n3. The client assumes full financial liability for any damages to TVs, Radio or DVD Player caused during the duration of the rental by them or any members of their party with a minimum fee of $400 depending on the damaged item price.\n4. It is Illegal to stand through the sunroof.\n5. Smoking is not permitted in all of our limousines\n6. Drug use is prohibited by law, the ride will be terminated immediately with no refunds, and any fines as a result of drug use inside our limos will be paid for by the customer in full plus all legal and attorney’s fees\n7. The driver has the right to terminate run without refund (if there is blatant indiscretion on the part of the client(s).\n8. The company is not liable in the event of mechanical breakdown while on charter and will only be responsible to provide a similar or an upgraded vehicle to continue the ride or making up lost time at a mutually agreed date if that is the customer wish.\n9. Overtime pay will apply after the first 10 minutes of prearranged time described on the run sheet and the rate will depend on the hourly rate of the requested vehicle.\n10. Not responsible for delays or the termination in winter caused by unsafe road conditions (ie. not salted, accidents, etc.).\n11. Not responsible for articles left in the limousine.\n12. Balances must be paid in full prior to rendering the service. If paying by credit card we will charge the card on file 24 hours before the service date. If paying by cash you must pay in full to the driver before the beginning of the service. If paying by checks you will need to pay balances in full two weeks prior to the service date.\n13. It is Illegal to load our Vehicles beyond seating capacity\n\n` },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
