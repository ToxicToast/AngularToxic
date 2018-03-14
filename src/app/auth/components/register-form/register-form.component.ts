import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'toxic-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  registerButtonText = 'Complete Registration';
  registerButtonIcon = 'fa fa-user-plus';
  registerButtonDisabled = false;

  @Output() eventSave = new EventEmitter<any>();
  @Output() eventTwitch = new EventEmitter<any>();
  @Input() loaded: boolean;
  @Input() loading: boolean;
  @Input() error: boolean;
  @Input() errorMessage: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  saveForm() {
    this.registerButtonDisabled = true;
    this.registerButtonText = 'Processing...';
    this.registerButtonIcon = 'fa fa-spinner fa-spin';
    this.passwordValidation();
    this.registerForm.reset();
  }

  registerViaTwitch() {
    this.eventTwitch.emit();
  }

  private createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeat_password: [''],
      remember: [false],
    });
  }

  private passwordValidation() {
    const { password, repeat_password } = this.registerForm.value;
    let valid = false;
    if (password !== repeat_password) {
      this.registerButtonDisabled = true;
      valid = false;
    } else {
      this.registerButtonText = 'Complete Registration';
      this.registerButtonIcon = 'fa fa-user-plus';
      this.registerButtonDisabled = false;
      valid = true;
    }
    if (valid) {
      this.eventSave.emit(this.registerForm.value);
    }
  }

}
