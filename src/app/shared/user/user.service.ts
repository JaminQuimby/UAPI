import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';
import { JsonApiService } from '../../core/api/json-api.service';
import { UserInterface } from './user.interface';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UserService {

  constructor(public af: AngularFire) { }
  public getLoginInfo(): Observable<any> {
    return this.af.auth
      .map(user => user = user);
    //      .take(1);
  }

  public getLoginDetails(): Observable<any> {
    return this.af.database
      .object(`/users/${localStorage.getItem('uid')}/profile/`)
      .map(userDetail => {
        let photoURL = { 'photoURL': '//gravatar.com/avatar/' + Md5.hashStr(userDetail.photoURL) };
        userDetail = Object.assign(userDetail, photoURL);
      });
    //      .take(1);
  }

  public setLoginDetails(data: UserInterface) {
    this.af.database
      .object(`/users/${localStorage.getItem('uid')}/profile/`)
      .set(data);

  }
}
