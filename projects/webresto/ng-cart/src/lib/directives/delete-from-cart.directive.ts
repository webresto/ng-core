import { Directive, HostListener, Input } from '@angular/core';
import { Cart, NgRestoCartService } from '../services/ng-restocart.service';

@Directive({
  selector: '[rstDeleteFromCart]'
})
export class DeleteFromCartDirective {

  @Input() cart:Cart;

  constructor(private cartService: NgRestoCartService) {  }


  @Input() dish: any;
  @Input() amountDish: any;

  @HostListener('click')
  onClick() {
    this.cartService.removeDishFromCart(this.dish.id, this.amountDish)
  }

}
