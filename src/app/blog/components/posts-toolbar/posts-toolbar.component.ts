import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toxic-posts-toolbar',
  templateUrl: './posts-toolbar.component.html',
  styleUrls: ['./posts-toolbar.component.scss']
})
export class PostsToolbarComponent implements OnInit {

  @Input() posts: any[];
  @Input() categories: any[];
  @Input() loaded: boolean;
  @Input() selectedCategory: number;
  @Output() clickedCategory = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onClickedCategory(categoryId) {
    this.clickedCategory.emit(categoryId);
  }

}
