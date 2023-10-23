import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';
import { GroupComponent } from './pages/group/group.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: MyGroupsComponent, title: 'Mis Grupos', children: [  
    { path: 'group', component: GroupComponent, title: 'Mi Grupo'}
  ] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
