import { Offer } from './shared/offer.model';

export class OffersSerice {

    public offers = [{
        id: 1,
        category: 'Cotton',
        title: 'Smooth dishcloth',
        description: 'Super smooth dishcloth!',
        advertiser: 'Uncle Ben',
        price: 9.90,
        highlight: true,
        images: [
            { url: '/assets/offers/1/img1.jpg' },
            { url: '/assets/offers/1/img2.jpg' },
            { url: '/assets/offers/1/img3.jpg' },
            { url: '/assets/offers/1/img4.jpg' }
        ]
    },
    {
        id: 2,
        category: 'Leather',
        title: 'Resistant dishcloth',
        description: 'Super resistant dishcloth!',
        advertiser: 'Aunt Marie',
        price: 12.90,
        highlight: true,
        images: [
            { url: '/assets/offers/2/img1.jpg' },
            { url: '/assets/offers/2/img2.jpg' },
            { url: '/assets/offers/2/img3.jpg' },
            { url: '/assets/offers/2/img4.jpg' }
        ]

    },
    {
        id: 4,
        category: 'Nylon',
        title: 'Durable dishcloth',
        description: 'Super durable dishcloth!',
        advertiser: 'Grandma Lola',
        price: 15.90,
        highlight: true,
        images: [
            { url: '/assets/offers/3/img1.jpg' },
            { url: '/assets/offers/3/img2.jpg' },
            { url: '/assets/offers/3/img3.jpg' },
            { url: '/assets/offers/3/img4.jpg' },
            { url: '/assets/offers/3/img5.jpg' },
            { url: '/assets/offers/3/img6.jpg' }
        ]
    }];

    public getOffersPromoise(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {

          if (false) {
            resolve(this.offers);
          } else {
            reject({status: 404, msg: '404 Not Found'});
          }

        });
    }

    public getOffers(): Array<Offer> {
        return this.offers;
    }
}
