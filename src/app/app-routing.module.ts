import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/security/features/login/login.component';
import { AuthGuard } from './shared/security/guards/auth.guard';
import { HasRoleGuard } from './shared/security/guards/has-role.guard';

const routes: Routes = [
  {
    path: 'worker',
    data: { 'role': 'ROLE_WORKER' },
    canActivate: [AuthGuard, HasRoleGuard],
    loadChildren: () => import('./features').then(m => m.WorkerModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
