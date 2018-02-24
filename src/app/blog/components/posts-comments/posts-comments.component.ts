import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'toxic-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.scss']
})
export class PostsCommentsComponent implements OnInit {

  dropdownOpen = false;

  @Input() comments: any[];
  @Input() loading: boolean;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  dropDownActions() {
    if (this.dropdownOpen) {
      this.dropdownOpen = false;
    } else {
      this.dropdownOpen = true;
    }
  }

  dropDownStyles() {
    if (this.dropdownOpen) {
      return this.sanitizer.bypassSecurityTrustStyle('display: block !important;');
    }
  }

}
