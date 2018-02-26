import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'toxic-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent implements OnInit {

  @Input() loading: boolean;
  @Input() loaded: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;
  @Input() posts: any[];
  breadcrumbs = [];

  constructor() {
    this.breadcrumbs.push({ title: 'Home', link: '/', active: false });
    this.breadcrumbs.push({ title: 'Blog', link: '/blog', active: false });
    this.breadcrumbs.push({ title: 'Archive', link: '/blog/archive', active: true });
  }

  ngOnInit() {
  }

  getUserColor(role) {
    if (role === 'Broadcaster') {
      return 'badge-pc-text';
    } else {
      return 'badge-twitch-text';
    }
  }

}
