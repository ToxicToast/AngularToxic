import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'toxic-last-post-hero',
  templateUrl: './last-post-hero.component.html',
  styleUrls: ['./last-post-hero.component.scss']
})
export class LastPostHeroComponent implements OnInit {

  @Input() lastPost: any;
  @Input() loaded: boolean;
  @Input() error: boolean;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() { }

  getBackground(lastPost): SafeStyle {
    const { hero } = lastPost;
    return this.sanitizer.bypassSecurityTrustStyle(`background-image: url("${hero}")`);
  }

}
