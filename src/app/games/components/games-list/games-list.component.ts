import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toxic-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  @Input() loaded: boolean;
  @Input() games: any[];

  constructor() { }

  ngOnInit() {
  }

}
