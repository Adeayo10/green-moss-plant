import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../storage.service';
import { User, LoginUser } from '../models/user' 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User | null>(null);
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private storageService: StorageService) {
    this.checkAuth();
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  private async checkAuth() {
    const user = await this.storageService.get('user');
    if (user) {
      this._user.next(user);
      this._isAuthenticated.next(true);
    }
  }

  async register(user: User) {
    await this.storageService.set('user', user);
    this._user.next(user);
    this._isAuthenticated.next(true);
  }
  async login(loginUser: LoginUser) {
    await this.storageService.set('user', loginUser)
    const user = await this.storageService.get('user');
    if (user && user.email === loginUser.email && user.password === loginUser.password) {
      this._user.next(user);
      this._isAuthenticated.next(true);
      return true;
    } else {
      this._isAuthenticated.next(false);
      return false;
    }
  }
  async logout() {
    await this.storageService.remove('user');
    this._user.next(null);
    this._isAuthenticated.next(false);
  }
}