import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toxic-games-index-layout',
  templateUrl: './games-index-layout.component.html',
  styleUrls: ['./games-index-layout.component.scss']
})
export class GamesIndexLayoutComponent implements OnInit {

  @Input() loaded: boolean;
  @Input() games: any[];
  @Output() onSearch = new EventEmitter<string>();
  @Output() onLoad = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
