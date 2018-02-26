import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'toxic-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input() loaded: boolean;
  @Input() posts: any[];
  @Input() category: number;
  @Output() eventRefresh = new EventEmitter<boolean>();

  constructor() { }

  refreshList() {
    this.eventRefresh.emit(true);
  }

  ngOnInit() { }

  getUserColor(role) {
    if (role === 'Broadcaster') {
      return 'badge-pc-text';
    } else {
      return 'badge-twitch-text';
    }
  }

}
