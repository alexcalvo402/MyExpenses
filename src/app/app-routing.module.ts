import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './pages/group/group.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'group', component: GroupComponent },
  //{ path: 'myGroups', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
