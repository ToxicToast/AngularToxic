import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'toxic-games-toolbar',
  templateUrl: './games-toolbar.component.html',
  styleUrls: ['./games-toolbar.component.scss']
})
export class GamesToolbarComponent implements OnInit {

  @Input() loaded: boolean;
  @Output() onSearch = new EventEmitter<string>();
  @Output() onLoad = new EventEmitter<any>();

  gamesForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  searchGame() {
    const game = this.gamesForm.value.search;
    this.onSearch.emit(game);
    this.gamesForm.reset();
  }

  refreshGames() {
    this.onLoad.emit();
  }

  private createForm() {
    this.gamesForm = this.fb.group({
      search: ['', Validators.required]
    });
  }
}
