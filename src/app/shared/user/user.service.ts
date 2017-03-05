import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';
import { JsonApiService } from '../../core/api/json-api.service';

@Injectable()
export class UserService {

  constructor(public af: AngularFire) { }
  getLoginInfo(): Observable<any> {
    return this.af.auth
      .map(user => user = user)
      .take(1);
  }

  getLoginDetails(uid): Observable<any> {
    if (uid) {
      return this.af.database
        .object(`/users/${uid}/profile`)
        .map(userDetail => userDetail = userDetail)
        .take(1);
    }
  }
}
