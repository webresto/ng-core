import { Directive, Input, HostListener } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Cart, NgRestoCartService } from '../services/ng-restocart.service';

@Directive({
  selector: '[rstOrderCart]'
})
export class OrderCartUserDirective {

  @Input() orderCart: any;
  cart: Cart;

  @HostListener('click')
  onClick() {
    this.order(this.orderCart.value);
    console.log(this.orderCart.value)
  }

  private requiredFields: Array<string> = ["name", "phone", "street", "house"];
  private checkerFields: BehaviorSubject<boolean>;

  constructor(private cartService: NgRestoCartService) {
    this.checkerFields = new BehaviorSubject(undefined);
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      const sub: Subscription = this.cartService.userCart().subscribe(
        cart => {
          if (this.cart && this.orderCart.valid && this.cart.cartTotal != cart.cartTotal && cart.cartTotal > 0) {
            this.checkStreet(this.orderCart.value)
          }
          this.cart = cart;
        }, () => { }, () => sub.unsubscribe()
      );
    }, 100);

    setTimeout(() => {
      this.checkerFields.next(this.checkForFields(this.orderCart._directives, this.requiredFields));
    }, 100);

    this.checkerFields.subscribe(state => {
      if (state) {
        this.orderCart.controls['street'].valueChanges.subscribe((val: any) => {
          if (typeof val === 'object') {
            setTimeout(() => {
              if (this.orderCart.controls['house'].valid) {
                this.orderCart.value.name = this.orderCart.value.name || "Неуказано";
                this.orderCart.value.phone = this.orderCart.value.phone || "78888888888";
                this.checkStreet(this.orderCart.value);
              }
            }, 100);
          }
        });
        this.orderCart.controls['house'].valueChanges.subscribe(() => {
          setTimeout(() => {
            if (this.orderCart.controls['street'].valid) {
              this.orderCart.value.name = this.orderCart.value.name || "Неуказано";
              this.orderCart.value.phone = this.orderCart.value.phone || "78888888888";
              this.checkStreet(this.orderCart.value);
            }
          }, 100);
        });

      }
    })


  }


  checkForFields(formDirectives: Array<any>, requiredFields: Array<string>): boolean {

    let fieldsAreAvailable: { [key: string]: boolean } = {};
    let noFields: Array<string> = [];


    formDirectives.forEach(element => {
      fieldsAreAvailable[element.name] = true;
    });

    requiredFields.forEach(element => {
      if (!fieldsAreAvailable.hasOwnProperty(element)) {
        noFields.push(element);
      }
    });

    if (noFields.length <= 0) {
      return true;
    } else {
      console.error("У формы отсутсвуют следующие обязательные для корректной работы модуля поля:", noFields)
      return false;
    }
  }

  order(dataToSend: { comment: string; cash: any; bankcard: any; street: { id: any; }; house: any; housing: any; doorphone: any; entrance: any; floor: any; apartment: any; phone: string; email: any; name: any; personsCount: any; }) {
    if (this.checkForFields(this.orderCart._directives, this.requiredFields)) {
      let payment;
      let comment = dataToSend.comment || "Не указан"

      if (dataToSend.cash) {
        payment = "Наличными курьеру";
      } else if (dataToSend.bankcard) {
        payment = "Банковской картой курьеру";
      } else {
        payment = "Не указан";
      }
      console.log(dataToSend);
      let data = {
        "cartId": this.cart.cartId,
        // TODO: тип оплаты надо вынести в отдельный модуль.
        "comment": "\n Тип оплаты:" + payment + "\nКоментарий:" + comment,
        // "delivery": {
        //   "type": "string (self or nothing)"
        // },
        "address": {
          // "city": "string",
          "streetId": dataToSend.street.id,
          "home": dataToSend.house,
          "housing": dataToSend.housing,
          // "index": "string",
          "doorphone": dataToSend.doorphone,
          "entrance": dataToSend.entrance,
          "floor": dataToSend.floor,
          "apartment": dataToSend.apartment
        },
        "customer": {
          "phone": '+' + dataToSend.phone,
          "mail": dataToSend.email,
          "name": dataToSend.name
        },
        "personsCount": dataToSend.personsCount
      };
      this.cartService.orderCart(data).subscribe();
    } else {

    }


  }

  checkStreet(dataToSend: { comment: any; street: { id: any; }; house: any; housing: any; doorphone: any; entrance: any; floor: any; apartment: any; phone: string; email: any; name: any; personsCount: any; }) {
    console.log(">>>>", dataToSend);
    if (this.checkForFields(this.orderCart._directives, this.requiredFields)) {
      let data = {
        "cartId": this.cart.cartId,
        "comment": dataToSend.comment,
        // "delivery": {
        //   "type": "string (self or nothing)"
        // },
        "address": {
          // "city": "string",
          "streetId": dataToSend.street.id,
          "home": dataToSend.house,
          "housing": dataToSend.housing,
          // "index": "string",
          "doorphone": dataToSend.doorphone,
          "entrance": dataToSend.entrance,
          "floor": dataToSend.floor,
          "apartment": dataToSend.apartment
        },
        "customer": {
          "phone": '+' + dataToSend.phone,
          "mail": dataToSend.email,
          "name": dataToSend.name
        },
        "personsCount": dataToSend.personsCount
      };
      this.cartService.checkStreet(data);

    } else {

    }
  }

  stringToNumber(str: number | any): number {
    if (typeof str === 'string') {
      return +str;
    } else if (typeof str === "number") {
      return str;
    } else {
      throw new Error("Параметр home должен быть или string или number");
    };
  }

}
