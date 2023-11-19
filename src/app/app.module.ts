import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';
import { ModalNewGroupComponent } from './components/modal-new-group/modal-new-group.component';
import { GroupStatisticsComponent } from './pages/group-statistics/group-statistics.component';
import { GroupComponent } from './pages/group/group.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseOutletComponent } from './components/base-outlet/base-outlet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyGroupsComponent,
    ModalNewGroupComponent,
    GroupStatisticsComponent,
    GroupComponent,
    ScrollToTopComponent,
    HeaderComponent,
    BaseOutletComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
