import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../storage.service';
import { User, LoginUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User | null>(null);
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  private mockDb: { users: User[] } = { users: [] };

  constructor(private storageService: StorageService) {
    this.checkAuth();
    this.initMockDb();
  }

  private async initMockDb(){
    const savedUsers = await this.storageService.get('mockDb')
    if(savedUsers){
      this.mockDb.users = savedUsers
    }
  }
  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }


  get currentUser(): User | null {
    return this._user.value;
  }

  private async checkAuth() {
    const user = await this.storageService.get('user');
    if (user) {
      this._user.next(user);
      this._isAuthenticated.next(true);
    }
  }

  // async register(user: User) {
  //   this.mockDb.users.push(user);
  //   await this.storageService.set('user', user);
  //   this._user.next(user);
  //   this._isAuthenticated.next(true);
  // }

  // async login(loginUser: LoginUser): Promise<boolean> {
  //   const user =await this.mockDb.users.find(u => u.email === loginUser.email && u.password === loginUser.password);
  //   if (user) {
  //     await this.storageService.set('user', user);
  //     console.log("setting user");
  //     this._user.next(user);
  //     this._isAuthenticated.next(true);
  //     return true;
  //   } else {
  //     this._isAuthenticated.next(false);
  //     return false;
  //   }
  // }
  
  async register(user: User) {
    this.mockDb.users.push(user);
    await Promise.all([
      this.storageService.set('mockDb', this.mockDb.users),
      this.storageService.set('user', user)
    ]);
    this._user.next(user);
    this._isAuthenticated.next(true);
  }

  async login(loginUser: LoginUser): Promise<boolean> {
    const user = this.mockDb.users.find(
      u => u.email === loginUser.email && u.password === loginUser.password
    );
    
    if (!user) {
      this._isAuthenticated.next(false);
      return false;
    }

    try {
      await this.storageService.set('user', user);
      this._user.next(user);
      this._isAuthenticated.next(true);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async logout() {
    await this.storageService.remove('user');
    this._user.next(null);
    this._isAuthenticated.next(false);
  }
 
  async updateUserProfile(updatedUser: User) {
    const index = this.mockDb.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.mockDb.users[index] = updatedUser;
      await this.storageService.set('user', updatedUser);
      this._user.next(updatedUser);
    }
  }
}