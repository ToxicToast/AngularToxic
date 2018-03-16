import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'toxic-users-toolbar',
  templateUrl: './users-toolbar.component.html',
  styleUrls: ['./users-toolbar.component.scss']
})
export class UsersToolbarComponent implements OnInit {

  @Input() loaded: boolean;
  @Output() onSearch = new EventEmitter<string>();
  @Output() onReload = new EventEmitter<any>();

  usersForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  refreshList() {
    this.onReload.emit();
  }

  searchUser() {
    const user = this.usersForm.value.search;
    this.onSearch.emit(user);
    this.usersForm.reset();
  }

  private createForm() {
    this.usersForm = this.fb.group({
      search: ['', Validators.required]
    });
  }

}
