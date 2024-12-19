import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CartItem } from '../models/cart-item.model';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor(private storage: Storage, private toastController: ToastController) {
    this.loadCart();
  }

  async loadCart() {
    const storedCart = await this.storage.get('cart');
    if (storedCart) {
      this.cart = storedCart;
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  async addToCart(item: CartItem) {
    const existingItem = this.cart.find(cartItem => cartItem.plantId === item.plantId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    console.log('Cart after adding item:', this.cart); // Add this line
    this.saveCart();
    this.presentToast('Item added to cart');
  }

  removeFromCart(plantId: string) {
    this.cart = this.cart.filter(item => item.plantId !== plantId);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  private saveCart() {
    console.log('Saving cart:', this.cart); // Add this line
    this.storage.set('cart', this.cart);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

}