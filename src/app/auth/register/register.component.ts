import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserAuthService } from '../user-auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', [Validators.required]],
    });
  }

  markAllControlsAsTouched() {
    Object.keys(this.signupForm.controls).forEach((controlName) => {
      this.signupForm.controls[controlName].markAsTouched();
    });
  }

  signup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.userAuthService
        .createUser(
          this.signupForm.value.name,
          this.signupForm.value.email,
          this.signupForm.value.password,
          this.signupForm.value.avatar
        )
        .subscribe((result) => {
          console.log(result);
          const statusCode = result.status;
          if (statusCode === 201) {
            this.toastr.success('Registered Successfully');
          } else {
            this.toastr.error('Error in Registration');
          }
        });
    }
    this.markAllControlsAsTouched();
  }
}
