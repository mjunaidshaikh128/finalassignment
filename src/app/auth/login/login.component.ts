import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  showToast = false;

  constructor(private formBuilder: FormBuilder, private userAuthService: UserAuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  markAllControlsAsTouched() {
    Object.keys(this.loginForm.controls).forEach((controlName) => {
      this.loginForm.controls[controlName].markAsTouched();
    });
  }

  login() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userAuthService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((result) => {
        console.log(result);
        this.toastr.success('Logged in Successfully');
      })

    }
    this.markAllControlsAsTouched();
  }


}
