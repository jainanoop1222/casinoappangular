import { Component, OnInit } from '@angular/core';
import {CasinoSerService} from "../../casino-ser.service";
import {IUser} from "../IUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailid:string;
  emailidv:string;
  user:IUser;
  str:string="";
  constructor(private service:CasinoSerService,private router: Router) { }

  isRegistered(email:string)
  {

    this.service.getUser(email).subscribe(user1=>{this.user=user1;
      console.log(this.user);this.myfunc(this.user);
    });
  }
  myfunc(vari:IUser)
  {
    // var data = sessionStorage.getItem('Emailid');

    console.log(vari);
    if(vari.Emailid===this.emailid)
    {
      this.str="";
      var user = {'user':this.user};
      sessionStorage.setItem('user', JSON.stringify(user));


      console.log("successful");
      this.router.navigate(['/play']);
      console.log("successful");
    }
    else {
      this.str="please eneter valid id";
    }
  }
  ngOnInit() {
  }

}
