import { Component, OnInit, Input } from '@angular/core';
import {Route, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'toxic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: any;
  loggedUserDrop = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
    // console.log('user', this.user);
  }

}
