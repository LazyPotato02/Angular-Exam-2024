import {Routes} from '@angular/router';
import {RegisterComponent} from './features/auth/components/register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './features/auth/components/login/login.component';
import {LogoutComponent} from './features/auth/components/logout/logout.component';
import {CreateTodoComponent} from './todo/create/create.component';
import {EditTodoComponent} from './todo/edit/edit.component';
import {DeleteTodoComponent} from './todo/delete/delete.component';
import {NotAuthGuard} from './core/services/guards/not-auth-guard/not-auth-guard.component';
import {AuthGuard} from './core/services/guards/auth-guard/auth-guard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutComponent} from './about/about.component';
import {BenefitsComponent} from './benefits/benefits.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard]},
    {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'benefits', component: BenefitsComponent},
    {path: 'todos/create', component: CreateTodoComponent, canActivate: [AuthGuard]},
    {path: 'todos/edit/:id', component: EditTodoComponent, canActivate: [AuthGuard]},
    {path: 'todos/delete', component: DeleteTodoComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundComponent},
];


