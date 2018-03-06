import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'toxic-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent implements OnInit {

  @Input() userId: number;
  @Input() user: any[];
  @Input() loading: boolean;
  @Input() loaded: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`background-image: url("${image}")`);
  }

  userBannedError(username) {
    return { message: `The Profile of ${username} is currently not available.` };
  }
}
