import {Routes} from '@angular/router';
import {RegisterComponent} from './features/auth/components/register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './features/auth/components/login/login.component';
import {LogoutComponent} from './features/auth/components/logout/logout.component';
import {CreateTodoComponent} from './todo/create/create.component';
import {EditTodoComponent} from './todo/edit/edit.component';
import {DeleteTodoComponent} from './todo/delete/delete.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'todos/create', component: CreateTodoComponent},
    {path: 'todos/edit/:id', component: EditTodoComponent},
    { path: 'todos/delete/:id', component: DeleteTodoComponent },
    {path: '**', redirectTo: ''},
];


