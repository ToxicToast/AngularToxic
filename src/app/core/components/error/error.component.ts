import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toxic-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() errorMessage: string;
  @Input() error: boolean;

  constructor() { }

  ngOnInit() {
  }

}
