import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReposComponent } from './components/repos/repos.component';
import { InfoComponent } from './components/info/info.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //New
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
