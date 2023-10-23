import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';
import { GroupComponent } from './pages/group/group.component';
import { BaseOutletComponent } from './components/base-outlet/base-outlet.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: BaseOutletComponent, children: [  
    { path: '', component: MyGroupsComponent, title: 'Mis Grupos' , data: {animation: 'Home'}},
    { path: 'group', component: GroupComponent, title: 'Mi Grupo' , data: {animation: 'Article'}}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
