import { Component, OnInit } from '@angular/core';
import { OffersSerice } from '../offers.service';

@Component({
  selector: 'ang-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersSerice]
})

export class HomeComponent implements OnInit {

  private offerService: OffersSerice;

  constructor(offerService: OffersSerice) {
    this.offerService = offerService;
  }

  ngOnInit() {
    console.log (this.offerService.getOffers());
  }

}
