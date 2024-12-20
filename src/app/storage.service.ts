import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _ready: Promise<void>;

  constructor(private storage: Storage) {
    console.log('StorageService constructor called');
    this._ready = this.init();
  }

  async init() {
    console.log('Initializing storage');
    const storage = await this.storage.create();
    this._storage = storage;
    console.log('Storage initialized');
  }

  public async set(key: string, value: any) {
    console.log(`Setting value for key: ${key}`);
    await this._ready;
    const result = await this._storage?.set(key, value);
    console.log(`Value set for key: ${key}`);
    return result;
  }

  public async get(key: string) {
    console.log(`Getting value for key: ${key}`);
    await this._ready;
    const result = await this._storage?.get(key);
    console.log(`Value retrieved for key: ${key}`, result);
    return result;
  }

  public async remove(key: string) {
    console.log(`Removing value for key: ${key}`);
    await this._ready;
    const result = await this._storage?.remove(key);
    console.log(`Value removed for key: ${key}`);
    return result;
  }

  public async clear() {
    console.log('Clearing all storage');
    await this._ready;
    const result = await this._storage?.clear();
    console.log('All storage cleared');
    return result;
  }
}
