# @sails-resto/ng-core
## Установка модуля
Модуль устанавливается с Git репозитория, в папку node_modules
## Подключение модуля в проект
Добавьте следующие в ваш app.module.ts

~~~ javascript
import { ngCoreHttpInterceptorProviders } from '@sails-resto/ng-core';
~~~
~~~ javascript  
providers: [
  ..........
  ngCoreHttpInterceptorProviders
],
~~~


## Пример использования @sails-resto/ng-core в своих модулях
~~~ javascript
import { NetService, EventerService, EventMessage } from '@sails-resto/ng-core';
import { tap } from 'rxjs/operators';
..........
constructor(
    private net:NetService,
    private eventer:EventerService
) {
    this.net.post('/api-url', data)
      .pipe(
        tap(
          result => {
            ........
          },
          error => this.eventer.emitMessageEvent(
            new EventMessage('error', 'Ошибка', error)
          )
        )
      );
}
~~~