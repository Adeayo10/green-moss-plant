import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    // Mock database for testing purposes
    private mockDb: { [key: string]: any } = {
        '/checkout': []
    };

    constructor() {}

    // Mock processOrder method for testing without actual HTTP request
    processOrder(cart: CartItem[]): Observable<any> {
        const response = { success: true, message: 'Order processed successfully', cart };
        this.mockDb['/checkout'].push(cart);
        return new Observable(observer => {
            observer.next(response);
            observer.complete();
        });
    }
}
