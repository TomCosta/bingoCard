import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cardNumber=[
    '01','06','11','16','21',
    '02','07','12','17','22',
    '03','08','13','18','23',
    '04','09','14','19','24',
    '05','10','15','20','25',
  ];

  constructor() {}

}
