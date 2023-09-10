import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, AuthRoutingModule],
  exports: [LoginComponent],
})
export class AuthModule {}
