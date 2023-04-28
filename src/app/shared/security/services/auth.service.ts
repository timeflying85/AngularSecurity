import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable()
export class AuthService {

  constructor(
    private $http: HttpClient,
    private $session: SessionService
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.$http.post<{ accessToken: string, user: any }>(`${environment.base_uri}/login`, { email, password }).pipe(
      take(1),
      tap(data => this.$session.login({ id: data.user.id, token: data.accessToken })),
      map(data => data.user)
    )
  }

  register(email: string, password: string, roles: string[] = ['ROLE_WORKER']) {
    this.$http
      .post<any>(`http://localhost:3000/register`, { email, password })
      .subscribe((data: any) => {
        const calls$ = [];

        for (let role of roles) {
          calls$.push(
            this.$http.post(`http://localhost:3000/roles`, { user_id: data.user.id, label: role }))
        }

        forkJoin(calls$).subscribe((roles) => console.log(roles))
      })
  }
}
