import { Component, OnInit, Input, AfterViewChecked, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toxic-posts-single',
  templateUrl: './posts-single.component.html',
  styleUrls: ['./posts-single.component.scss']
})
export class PostsSingleComponent implements OnInit, AfterViewChecked {

  @Input() postId: number;
  @Input() post: any;
  @Input() loaded: boolean;
  @Input() error: boolean;
  @Input() comments: any[];
  @Input() commentsLoading: boolean;
  @Input() loggedUser: any[];
  @Output() saveComment = new EventEmitter<any>();
  breadcrumbs = [];
  private breadcrumbsAdded = false;


  constructor() {}

  ngOnInit() {
    const bread = [];
    bread.push({ title: 'Home', link: '/', active: false });
    bread.push({ title: 'Blog', link: '/blog', active: false });
    this.breadcrumbs = bread;
  }

  ngAfterViewChecked() {
    const bread = this.breadcrumbs;
    if (this.post && this.post.hasOwnProperty('title') && !this.breadcrumbsAdded) {
      const { id, title } = this.post;
      bread.push({ title, link: `/blog/${id}`, active: true });
      this.breadcrumbs = bread;
      this.breadcrumbsAdded = true;
    }
    /* if (this.post && this.post.hasOwnProperty('title') && !this.breadcrumbsAdded) {
      const bread = [];
      const { id, title } = this.post;
      bread.push({ title: 'Home', link: '/', active: false });
      bread.push({ title: 'Blog', link: '/blog', active: false });
      bread.push({ title, link: `/blog/${id}`, active: true });
      this.breadcrumbs = bread;
      this.breadcrumbsAdded = true;
    } */
  }

  onSaveComment(payload) {
    this.saveComment.emit(payload);
  }
}
