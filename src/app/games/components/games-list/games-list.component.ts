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

  getPlatform(platform) {
    if (platform === 'PC') {
      return 'badge badge-pc';
    } else {
      return '';
    }
  }

  getApiSupport(hasApi) {
    if (hasApi === '1') {
      return 'badge badge-youtube';
    } else {
      return 'hidden';
    }
  }

}
