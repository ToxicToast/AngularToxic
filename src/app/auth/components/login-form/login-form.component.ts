import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'toxic-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginButtonText = 'Login';
  loginButtonIcon = 'fa fa-sign-in'; // <i class="fa fa-sign-in"></i>
  loginButtonDisabled = false;

  @Input() loggedUser: any;
  @Output() eventSave = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  saveForm() {
    this.loginButtonDisabled = true;
    this.loginButtonText = 'Processing...';
    this.loginButtonIcon = 'fa fa-spinner fa-spin';
    this.eventSave.emit(this.loginForm.value);
    this.loginForm.reset();
    setTimeout(() => {
      this.loginButtonDisabled = false;
      this.loginButtonIcon = 'fa fa-sign-in';
      this.loginButtonText = 'Login';
    }, 1500);
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }
}
