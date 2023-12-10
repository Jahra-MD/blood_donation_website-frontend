import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterationComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
