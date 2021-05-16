import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PresentationComponent} from './presentation/presentation.component';
import {SettingComponent} from './setting/setting.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: CalendarComponent},
  {path: 'presentations', component: PresentationComponent},
  {path: 'settings', component: SettingComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
