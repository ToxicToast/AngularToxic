import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toxic-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users: any[];
  @Input() loading: boolean;
  @Input() loaded: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;
  breadcrumbs = [];
  private breadcrumbsAdded = false;

  constructor() { }

  ngOnInit() {
    const bread = [];
    bread.push({ title: 'Home', link: '/', active: false });
    bread.push({ title: 'Community', link: '/users', active: true });
    this.breadcrumbs = bread;
  }

  refreshList() {
    console.log('refresh List');
  }

  getUserColor(role) {
    if (role === 'Broadcaster') {
      return 'badge badge-pc';
    } else {
      return 'badge badge-twitch';
    }
  }

}
