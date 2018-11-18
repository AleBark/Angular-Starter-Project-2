import { Component, OnInit } from '@angular/core';
import { OffersSerice } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'ang-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersSerice]
})

export class HomeComponent implements OnInit {

  private offerService: OffersSerice;
  public offers: Array<Offer>;

  constructor(offerService: OffersSerice) {
    this.offerService = offerService;
  }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
    console.log(this.offers);
  }

}
