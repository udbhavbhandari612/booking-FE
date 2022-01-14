import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: 0
      })),
      state('closed', style({
        overflow: 'hidden',
        height: 0,
        padding: 0
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {

  navState: boolean = true;
  vehicles: any = [];

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.getVehicles()

  }

  getVehicles() {
    this.backend.getVehicles().toPromise().then(res => this.vehicles = res).catch(err => alert(err.message))
  }



}
