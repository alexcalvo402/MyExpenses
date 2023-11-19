import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';
import { GroupComponent } from './pages/group/group.component';
import { BaseOutletComponent } from './components/base-outlet/base-outlet.component';
import { ApiService } from './services/api.service';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: MyGroupsComponent, title: 'Mis Grupos', data: { animation: 'Home' } },
  {
    path: 'group/:id', 
    component: GroupComponent, 
    title: 'Mi Grupo', 
    data: { animation: 'Group' },
    resolve: {expenses: (route: ActivatedRouteSnapshot) => inject(ApiService).getExpenses(route.paramMap.get('id')!)}
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
