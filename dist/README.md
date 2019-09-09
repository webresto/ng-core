# @webresto/ng-core
## Установка модуля
Модуль устанавливается с Git репозитория, в папку node_modules
## Подключение модуля в проект
Добавьте следующие в ваш app.module.ts

~~~ javascript
import { ngCoreHttpInterceptorProviders } from '@webresto/ng-core';
~~~
~~~ javascript  
providers: [
  ..........
  ngCoreHttpInterceptorProviders
],
~~~


## Пример использования @webresto/ng-core в своих модулях
~~~ javascript
import { NetService, EventerService, EventMessage } from '@webresto/ng-core';
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

## Для внесения правок без стороннего проекта:
Выполните следующие команды:
~~~ javascript
git clone this_repo/url
cd ng-core
npm install
npm-install-peers
..........


~~~
Теперь вы можете внести правки в папке /src
После внесения правок, выполните
~~~ javascript
ng build
~~~
И можете смело делать комит и пушить его в удаленный репозиторий.