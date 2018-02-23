import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

@Component({
  selector: 'toxic-about-index-container',
  templateUrl: './about-index-container.component.html',
  styleUrls: ['./about-index-container.component.scss']
})
export class AboutIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  about$: Observable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
