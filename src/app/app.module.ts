import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CasinoSerService} from "./casino-ser.service";
import { ParentComponent } from './parent/parent.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./parent/login/login.component";
import {RouterModule} from "@angular/router";
import { PlayComponent } from './parent/play/play.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    LoginComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {path:'home',component: LoginComponent},
        {path:'play',component: PlayComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},


    ])
      ],
  providers: [CasinoSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
