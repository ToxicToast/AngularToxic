import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toxic-games-toolbar',
  templateUrl: './games-toolbar.component.html',
  styleUrls: ['./games-toolbar.component.scss']
})
export class GamesToolbarComponent implements OnInit {

  @Input() loaded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
