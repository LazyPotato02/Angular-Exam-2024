import {Routes} from '@angular/router';
import {RegisterComponent} from './features/auth/components/register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './features/auth/components/login/login.component';
import {LogoutComponent} from './features/auth/components/logout/logout.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '' },
];


