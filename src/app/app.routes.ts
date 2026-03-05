import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Achievement } from './pages/achievement/achievement';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { StudentDashboard } from './pages/student-dashboard/student-dashboard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Register } from './pages/register/register';
import { Subjects } from './pages/subject/subject';

export const routes: Routes = [
    {path: '' ,component:Home},
    {path: 'home' ,component:Home},
    {path:'about', component:About},
    {path:'achievement', component:Achievement},
    {path:'services', component:Services},
    {path:'contact', component:Contact},
    {path:'login' ,component:Login},
    {path:'subject' ,component:Subjects},
    {path:'register',component:Register},
    {path:'dashbord', component:StudentDashboard}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }