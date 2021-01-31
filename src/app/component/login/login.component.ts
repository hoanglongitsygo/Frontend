import { AuthenticationService } from './../../core/services/authentication.service';
import { Location } from '@angular/common';
import { UserService } from './../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/models/user.model';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  isLoading = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private _location: Location,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  cancel(): void {
    this._location.back();
  }

  onSubmit(): void {
    this.isLoading = true;
    if (!this.loginForm.invalid) {
      const bodyReq: Login = this.loginForm.value;

      this.authenticationService.login(bodyReq.username, bodyReq.password)
        .pipe(first())
        .subscribe(
          data => {
            this.messageService.add({ severity: 'success', summary: 'Thành công!', detail: `Chào mừng ${data.username}.` });
            setTimeout(() => {
              this.router.navigate([this.returnUrl]);
            }, 3000);
          },
          error => {
            console.log(error);
            this.isLoading = false;
          });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
