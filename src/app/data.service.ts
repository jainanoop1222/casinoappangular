import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

export class DataService {
  loginChecker:boolean;
  private messageSource = new BehaviorSubject<boolean>(this.loginChecker);
  loginCheckers = this.messageSource.asObservable();
  constructor() { }
  loginCheckersChanger(message: boolean) {
    this.messageSource.next(message);
  }

  userId:number;
  private messageSource1 = new BehaviorSubject<number>(this.userId);
  userIdMethod = this.messageSource1.asObservable();
  userIdChange(message1: number) {
    this.messageSource1.next(message1);
  }

  userName:string;
  private messageSource3 = new BehaviorSubject<string>(this.userName);
  userNameMethod = this.messageSource3.asObservable();
  userNameChange(message3: string) {
    this.messageSource3.next(message3);
  }

  passWord:string;
  private messageSource4 = new BehaviorSubject<string>(this.passWord);
  passWordMethod = this.messageSource4.asObservable();
  passWordChange(message4: string) {
    this.messageSource3.next(message4);
  }


  favArray:number[];
  private messageSource5 = new BehaviorSubject<number[]>(this.favArray);
  favArrayMethod = this.messageSource5.asObservable();
  // constructor() { }
  favArrayChange(message5: number[]) {
    this.messageSource5.next(message5);
  }

  myBlogCount:number[];
  private messageSource6 = new BehaviorSubject<number[]>(this.myBlogCount);
  myBlogCountMethod = this.messageSource6.asObservable();
  // constructor() { }
  myBlogCountChange(message6: number[]) {
    this.messageSource6.next(message6);
  }
}
