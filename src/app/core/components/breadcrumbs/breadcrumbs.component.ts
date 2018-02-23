import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toxic-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() breadcrumbs: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isActive(breadcrumb) {

  }

  routeLink(breadcrumb) {
    const { link } = breadcrumb;
    this.router.navigateByUrl(link);
  }

}
