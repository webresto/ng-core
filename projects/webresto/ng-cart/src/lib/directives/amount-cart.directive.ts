import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { Cart, NgRestoCartService } from '../services/ng-restocart.service';

@Directive({
  selector: '[rstAmountCart]'
})
export class AmountCartDirective {
  @Input() cart: Cart;

  get amount(): string {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', String(this.cart?.dishesCount || 0));
    return String(this.cart?.dishesCount || 0);
  };

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {

  }


}
