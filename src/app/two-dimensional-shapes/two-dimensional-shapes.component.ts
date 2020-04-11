import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two-dimensional-shapes',
  templateUrl: './two-dimensional-shapes.component.html',
  styleUrls: ['./two-dimensional-shapes.component.scss'],
})
export class TwoDimensionalShapesComponent implements OnInit {

  public page: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = '2D Shapes'; // this.activatedRoute.snapshot.paramMap.get('id')
  }

  returnRed () {
    return 'red';
  }
}
