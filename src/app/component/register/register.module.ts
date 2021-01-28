import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ToastModule } from 'primeng/toast';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ToastModule],
  exports: [RouterModule]
})
export class RegisterModule { }
