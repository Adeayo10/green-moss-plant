import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { CartItem } from '../../models/cart-item.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    console.log('Loaded cart:', this.cart); // Add this line
  }

  removeItem(plantId: string) {
    this.cartService.removeFromCart(plantId);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  async checkout() {
    try {
      await this.checkoutService.processOrder(this.cart).toPromise();
      this.cartService.clearCart();
      await this.router.navigate(['/tabs/home']);
      this.presentToast('Order processed successfully');
    } catch (error) {
      console.error('Checkout failed', error);
      this.presentToast('Checkout failed');
    }
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}