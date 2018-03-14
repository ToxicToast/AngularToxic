import { Component, OnInit, Input } from '@angular/core';
import { UserColor } from '@core/helpers/userColor';

@Component({
  selector: 'toxic-users-groups',
  templateUrl: './users-groups.component.html',
  styleUrls: ['./users-groups.component.scss']
})
export class UsersGroupsComponent implements OnInit {

  @Input() groups: any[];

  constructor() { }

  ngOnInit() {
  }

  getUserColor(role) {
    const color = new UserColor();
    return `post-title ${color.getUserBadgeColor(role)}`;
  }

}
