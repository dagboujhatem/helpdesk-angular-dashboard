import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  avatar$: BehaviorSubject<string>;
  constructor() {
    this.avatar$ = new BehaviorSubject(this.getAvatar());
  }

  reloadAvatar() {
    this.avatar$.next(this.getAvatar());
  }

  // get avatar from localStorage
  getAvatar() {
    const avatar = localStorage.getItem('avatar');
    if (avatar !== null && avatar !== undefined) {
      return avatar;
    } else {
      return '';
    }
  }
}
