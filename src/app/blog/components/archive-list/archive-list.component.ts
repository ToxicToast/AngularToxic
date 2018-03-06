import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserColor } from '@core/helpers/userColor';

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
    const color = new UserColor();
    return color.getUserBadgeColor(role);
  }

}
