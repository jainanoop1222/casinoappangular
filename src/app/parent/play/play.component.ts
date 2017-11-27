import { Component, OnInit } from '@angular/core';
import {CasinoSerService} from "../../casino-ser.service";
import {Router} from "@angular/router";
// import {IUser} from "../IUser";
export interface IUser
{
  Name:string;
  Emailid:string;
  Balance:number;
  Blocked:number;
}
@Component({
  // selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  arr:number[]=[0,0,0,0,0,0,0,0];

  // arr;
  test:boolean=false;
  temp:number;
  user:IUser={
    Name:'',
    Emailid:'',
    Balance:null,
    Blocked:null

  };
  user1:string;
  rand:number;
  num2:number;
user2:IUser={
  Name:'',
  Emailid:'',
  Balance:null,
  Blocked:null

};

  constructor(private service:CasinoSerService,private  router:Router) { }

getuu()
{
  this.service.getUser(this.user['user'].Emailid).subscribe(user1=>{this.user2=user1;
    console.log(this.user);
  });

}
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
    this.getuu();
    // console.log( this.user[0]);
  }

  onChangeing(num:number)
  {
    this.num2=num;
    this.temp=this.arr[num];
    this.arr.fill(0);
    // console.log(this.arr);
    this.arr[num]=this.temp;
    // console.log(this.arr);

  }
  betSubmit()
  {
    for(var  i=0;i<8;i++)
    {
      if(this.arr[i]!=0)
      {
        this.test=true;
        break;
      }
    }
    if(this.test==true&&this.user2.Balance>=this.temp&&this.temp%500==0)
    {
      if (confirm("Are you sure") == true) {
       // console.log( );

        this.service.updateUser(this.user,this.temp,this.user['user'].Emailid).subscribe(data => {console.log(data);
        this.getuu();
          // sessionStorage.removeItem('user');
          // var user = {'user':this.user};
          // sessionStorage.getItem(['user'])
          // sessionStorage.setItem('user', JSON.stringify(user));
          // this.user = JSON.parse(sessionStorage.getItem('user'));
          this.function2();});
      // console.log(this.arr);

        console.log("after blocked");

      } else {
        console.log("not presswd");
      }
      // setTimeout(this.function2(),2000);

      this.test=false;
    }
    else {

      this.test=false;
      if(this.temp%500!=0){
        alert("Please enter amount in multiples of 500");
      }
      else {
        alert("Please enter valid amount");
      }
    }
  }
  function2()
  {
    alert("Ready for the result");
   this.rand= Math.floor(Math.random() * 36) + 1;
    console.log(this.rand);
    if((this.num2==0&&(this.rand>=1&&this.rand<=12))||(this.num2==1&&(this.rand>=13&&this.rand<=24))
      ||(this.num2==2&&(this.rand>=25)))
    {
      this.temp=1.5*this.temp;
    }
    else if((this.num2==4&&(this.rand>=1&&this.rand<=18))||(this.num2==5&&(this.rand>=19&&this.rand<=36))
      ||(this.num2==6&&(this.rand%2==0))||(this.num2==7&&(this.rand%2!=0)))
    {
      this.temp=1.25*this.temp;
    }
    else if(this.num2==3&&this.rand==0){
      this.temp=10*this.temp;
    }
    else {
      this.temp=0*this.temp;    }
      if(this.temp!=0)
      {
        console.log("won"+this.temp)
        alert("You have won "+this.temp+"lucky"+this.rand);
      }
      else
      {
        console.log("loose");
        alert("Sorry ....you lost "+"lucky"+this.rand);
      }
      console.log(this.temp);
    this.service.updateUserBal(this.user,this.temp,this.user['user'].Emailid).subscribe(data => {console.log(data);
    this.getuu();location.reload();});



  }
  abc()
  {
    // console.log(this.user.Balance);
    // console.log(this.user.Blocked);
    // console.log(this.user.Name);

  }
logout()
{
  this.router.navigate(['/home']);
  sessionStorage.clear();
}

}
