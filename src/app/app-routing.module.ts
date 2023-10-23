import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';
import { GroupComponent } from './pages/group/group.component';
import { BaseOutletComponent } from './components/base-outlet/base-outlet.component';
import { ExpenseComponent } from './pages/group/expense/expense.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
    { path: '', component: MyGroupsComponent, title: 'Mis Grupos' , data: {animation: 'Home'}},
    { path: 'group',children:[
      { path: '', component: GroupComponent, title: 'Mi Grupo' , data: {animation: 'Article'}},
      { path: 'expense', component: ExpenseComponent, title: 'Nuevo gasto' , data: {animation: 'Article'}}

    ]},

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
