import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'group', component: ListComponent },
  { path: 'myGroups', component: MyGroupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
