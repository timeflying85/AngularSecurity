import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private token$ = new BehaviorSubject<{ token: string, id: number } | null>(null)

  get Token(): { token: string, id: number } | null { return this.token$.value }

  constructor() {
    const token = localStorage.getItem('session_token')
    if (token) {
      this.token$.next(JSON.parse(token))
    }
    this.token$.subscribe((token) => this.handleStorage(token))
  }

  login(data: { id: number, token: string }) {
    this.token$.next(data)
  }

  logout() {
    this.token$.next(null)
  }

  private handleStorage(token: { id: number, token: string } | null) {
    if (token) {
      localStorage.setItem("session_token", JSON.stringify(token))
    } else {
      localStorage.removeItem("session_token")
    }
  }
}
