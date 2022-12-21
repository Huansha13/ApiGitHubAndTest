import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'user/:username', component: UserComponent},
  {path: 'repo/:username', component: ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
