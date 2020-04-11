import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.scss'],
})
export class ArithmeticComponent implements OnInit {
  public page: string;
  constructor() { }

  ngOnInit() {
    this.page = 'Basic Arithmetic'; // this.activatedRoute.snapshot.paramMap.get('id')
  }

}
