import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/core/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    fullName: ["", Validators.required],
    username: ["", Validators.required],
    email: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    password: ["", Validators.required],
    rePassword: ["", Validators.required]
  });
  isLoading = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    if (!this.registerForm.invalid) {
      const bodyReq: User = this.registerForm.value;
      this.userService.createNewUser(bodyReq).subscribe(
        result => {
          this.messageService.add({ severity: 'success', summary: 'Thành công!', detail: `Cảm ơn ${bodyReq.fullName} đã tin tưởng và ủng hộ.` });
          setTimeout(() => {
            this.router.navigate(["profile"]);
          }, 3000);
        },
        err => {
          console.log(err);
          this.isLoading = false;
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
      this.isLoading = false;
    }
  }

  cancel() {
    this.router.navigate(["home"]);
  }

}
