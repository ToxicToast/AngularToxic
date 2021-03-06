import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toxic-about-toxic',
  templateUrl: './about-toxic.component.html',
  styleUrls: ['./about-toxic.component.scss']
})
export class AboutToxicComponent implements OnInit {

  @Input() about: any[];
  @Input() loaded: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;

  breadcrumbs = [];

  constructor() {
    this.breadcrumbs.push({ title: 'Home', link: '/', active: false });
    this.breadcrumbs.push({ title: 'About', link: '/about', active: true });
  }

  ngOnInit() { }

}
