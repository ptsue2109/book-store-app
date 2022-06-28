import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {
  cities: any[];
  cars:any[] = [
    {
      "_id": "629f29ff19ccc251410b2339",
      "slideName": "SPY x FAMILY update",
      "URL": "/products/spyxfamily",
      "image": "https://theme.hstatic.net/200000343865/1000796725/14/ms_banner_img1.jpg?v=415",
      "__v": 0
    },
    {
      "_id": "62a5d17071c73d22f2a8d367",
      "slideName": "banner2",
      "URL": "/",
      "image": "https://firebasestorage.googleapis.com/v0/b/my-app-7bb3f.appspot.com/o/uploads%2Fms_banner_img2.jpg?alt=media&token=2f5125c5-bf53-495b-93d4-076297399010",
      "__v": 0
    },
  ]
  constructor() { 
    this.cities = [ 
      {name: 'New York', code: 'NY', inactive: false},
      {name: 'Rome', code: 'RM', inactive: true},
      {name: 'London', code: 'LDN', inactive: false},
      {name: 'Istanbul', code: 'IST', inactive: true},
      {name: 'Paris', code: 'PRS', inactive: false}
  ];
  }

  ngOnInit(): void {
  }

}
