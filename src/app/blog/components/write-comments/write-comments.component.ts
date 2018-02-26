import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorage } from '../../../core/helpers/sessionStorage';

@Component({
  selector: 'toxic-write-comments',
  templateUrl: './write-comments.component.html',
  styleUrls: ['./write-comments.component.scss']
})
export class WriteCommentsComponent implements OnInit {

  buttonText = 'Submit Comment';
  buttonIcon = 'fa fa-file-text-o';
  buttonDisabled = false;
  logged = false;

  @Input() postId: number;
  @Output() saveComment = new EventEmitter<any>();

  commentForm: FormGroup;
  // user_id number
  // hasRights <true|false>

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    const storage = new SessionStorage('loggedUser');
    this.logged = storage.hasItem();
  }

  onSaveComment() {
    this.buttonText = 'Proccessing...';
    this.buttonDisabled = true;
    this.buttonIcon = 'fa fa-spinner fa-spin';
    const { comment } = this.commentForm.value;
    const payload = {
      postId: this.postId,
      userId: 1,
      comment
    };
    this.saveComment.emit(payload);
    this.commentForm.reset();
    setTimeout(() => {
      this.buttonDisabled = false;
      this.buttonText = 'Submit Comment';
    }, 1500);
  }

  private createForm() {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

}
