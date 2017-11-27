import { Component } from '@angular/core';
import {CasinoSerService} from "./casino-ser.service";
export interface IUser
{
  Name:string;
  Emailid:string;
  Balance:number;
  Blocked:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
