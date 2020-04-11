import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  public page: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = 'Graphing'; // this.activatedRoute.snapshot.paramMap.get('id')
  }

}
