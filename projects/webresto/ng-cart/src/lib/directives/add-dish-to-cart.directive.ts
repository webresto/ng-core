import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Cart, NgRestoCartService } from '../services/ng-restocart.service';

@Directive({
  selector: '[rstAddToCart]'
})
export class AddDishToCartDirective {

  @Input() cart:Cart;
  @Input() modifires: any;

  constructor(private cartService: NgRestoCartService) {  }


  @Input() dish: any;
  @Input() amountDish: any;
  @Input() comment: string;

  @Output() loading = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<boolean>();
  @Output() error = new EventEmitter<any>();

  @HostListener('click')
  onClick() {
    this.addDishToCart(this.dish.id, this.amountDish)
  }

  private addDishToCart(dishID: string, amount: string) {

    let data = {
      dishId: dishID,
      amount: amount,
      cartId: this.cart.cartId,
      modifiers: this.modifires,
      comment: this.comment
    };

    this.loading.emit(true);

    const sub = this.cartService
      .addDishToCart$(data)
      .subscribe(
        () => this.success.emit(true),
        e => this.error.emit(e),
        () => {
          this.loading.emit(false);
          sub.unsubscribe();
        }
      );
  }

}
