import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserColor } from '@core/helpers/userColor';

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
  @Output() eventRefresh = new EventEmitter<any>();
  @Output() eventSearch = new EventEmitter<string>();

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
    console.error('refreshList');
    this.eventRefresh.emit();
  }

  onSearch(searchValue) {
    this.eventSearch.emit(searchValue);
  }

  getUserColor(role) {
    const color = new UserColor();
    return color.getUserRoleColor(role);
  }

}
