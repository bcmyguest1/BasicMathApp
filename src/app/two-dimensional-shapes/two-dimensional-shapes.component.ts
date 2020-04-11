import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two-dimensional-shapes',
  templateUrl: './two-dimensional-shapes.component.html',
  styleUrls: ['./two-dimensional-shapes.component.scss'],
})
export class TwoDimensionalShapesComponent implements OnInit {

  public page: string;
  public shapes = ['Square','Triangle','Circle',
                  'Pentagon','Hexagon','Rectangle',
                  'Trapezoid','Rhombus'];
  public selectedShapes = [];
  public questionShape = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = '2D Shapes'; // this.activatedRoute.snapshot.paramMap.get('id')
    this.pickShapes(3);
    this.questionShape = this.pickQuestionShape();
  }

  pickQuestionShape() {
    return 'Square';
  }

  // Function selects numShapes from shapes and adds them to a set for question
  pickShapes(numShapes: number) {
    let selectedShapesMap = new Set();
    if (numShapes > this.shapes.length) {
      numShapes = this.shapes.length;
    }

    for (let i = 0; i < numShapes; i++){
      let shapeSelected = this.shapes[Math.round(Math.random()*(this.shapes.length-1))];

      while (selectedShapesMap.has(shapeSelected)) {
        shapeSelected = this.shapes[Math.round(Math.random()*(this.shapes.length-1))];
      }
      selectedShapesMap.add(shapeSelected);
    }
    this.selectedShapes = Array.from(selectedShapesMap);
  }

}
