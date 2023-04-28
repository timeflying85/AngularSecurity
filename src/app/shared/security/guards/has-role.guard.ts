import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard {
  constructor(
    private $http: HttpClient,
    private $session: SessionService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const secureRole = route.data['role'];

    let params = new HttpParams()

    if (this.$session.Token) {
      params = params
        .appendAll({ 'user_id': this.$session.Token?.id })
    }

    return this.$http
      .get<any[]>(`${environment.base_uri}/roles`, { params })
      .pipe(
        map(roles => roles.find(r => r.label == secureRole) != null)
      );
  }

}
