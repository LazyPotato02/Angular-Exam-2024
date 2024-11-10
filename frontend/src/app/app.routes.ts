import {Routes} from '@angular/router';
import {RegisterComponent} from './features/auth/components/register/register.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '' },
];


