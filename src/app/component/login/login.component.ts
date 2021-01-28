import { UserService } from './../../core/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(["home"]);
  }

  onSubmit(): void {
    if (!this.loginForm.invalid) {
      const bodyReq: Login = this.loginForm.value;
      this.userService.login(bodyReq).subscribe(
        result => {
          const jwtBearerToken = {
            token: result.token
          };
          localStorage.setItem('currentUser', JSON.stringify(jwtBearerToken));
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
