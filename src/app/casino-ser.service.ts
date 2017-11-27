
import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
const BASE_URL='http://localhost:56977/api/User/';
// const BASE_URL2='http://localhost:56977/api/User/UpdateBalanceAmount?emailid=ashish@gmail.com&amt=500';
const BASE_URL2='http://localhost:56977/api/User/UpdateBlockedAmount?emailid=ashish@gmail.com&amt=500';
// http://localhost:56977/api/User/GetUserById?id=
const header={headers: new Headers({'Content-Type':'application/json'})};

@Injectable()
export class CasinoSerService {

  constructor(private http:Http) { }
  getUser(email:string)
  {
    return this.http.get(`${BASE_URL}${"GetUserById?id="}${email}`).map(response => { return response.json() });
  }
  updateUser(data,amount,email)
  {
    return this.http.put(`${BASE_URL}${"UpdateBlockedAmount?emailid="}${email}${"&amt="}${amount}`,data).map(res => {return res.json()});
    // return this.http.patch(`${BASE_URL}${data.id}`,data,header).map(res => res.json());
  }
  updateUserBal(data,amount,email)
  {
    return this.http.put(`${BASE_URL}${"UpdateBalanceAmount?emailid="}${email}${"&fact="}${amount}`,data).map(res => {return res.json()});
// return this.http.patch(`${BASE_URL}${data.id}`,data,header).map(res => res.json());
  }
  // getUser(email:string)
  // {
  //   return this.http.get(BASE_URL2).map(response => { return response.json() });
  // }
}
