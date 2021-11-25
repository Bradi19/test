# react-node [(ossystem.ua)](https://ossystem.ua)
Сайт ориентирован на потенциальных кандидатов для работы в компании OSSystem.

### Requirements:
1. node.js 8 >= мы используем async/await
1. mongo 3.4 >=
1. соблюдение чистоты когда при помощи eslint с настройкой от Airbnb

## Getting Started:
>$ git clone https://git.ossystem.ua/oss=projects/ossystem.com.ua/front

>$ cd react-node && npm install

### Git Process
1. Беремся за выполнение задачи.
1. Создаем локально ветку с номером задачи.
1. Стягиваем к себе ветку development в новосозданую ветку.
1. Начинаем работать над задачей.
1. После завершения задачи при попытке коммита, нужно удостовериться что eslint прошел валидацию, иначе не получиться закомитить изменения.
1. После удачного коммита, мы нашу локальную ветку пушим в глобальный репозиторий, с таким же названием ветки, после чего делаем Pull Request с вашей глобальной ветки в ветку development.
1. После полного цикла проверки задачи, и когда она полностью готова, удаляется ветка с глобального репозитория.
1. Повторяем цикл пока не победим все задачи :)

### Scripts ( package.json )
* npm run clean - удаляем папку уже с собраным проектом
* npm run build - собираем front-end часть проэкта
* npm run deploy - собираем полностью готовый проект
* npm run migrate - наполняем пустую базу данныеми
* npm run start - включаем front часть для работы над задачей
* npm run server - включаем back часть для работы над задачей
* npm run lint:eslint - проверяем eslint'ом весь код

### Style guide and project structure:

#### scss:

1. Вся цветовая палитра должна находиться в виде констант в root/src/scss/colorPallete.scss
1. Все стили связанные с отобржанеия тескста должны храниться в root/src/scss/textStyles.scss в виде описанных классов
1. создавать отдельный scss файл для каждого существующего компонента контейнера, файл должен начинаться так же как и называется сам класс, а так же, селекты в данном scss файле должны начинаться с названия класса


#### структура папок:
1. при создании любой папки, она должна содержать всегда index.js
1. если в папке только 1 класс, она должна находиться в index.js
1. в каждом .js файле должен быть export default, который в свою очередь должен экспортировать главный класс\функцию данного файла ( не запрещается делать export как вторичного функционала )
1. Если в папке существуют дополнительные классы, которое помогают основному классу в папке, они не должны использоваться больше нигде, кроме как в своей директории, если есть вероятность того что они будут использоваться вне своей директории, нужно такие компоненты выносить в отдельные свои директории

#### Стиль написания .js классов:
###### Компоненты:
1. сначала импортируются все что нужно с node_modules, после чего импортируется все остальное
1. должен быть export default
1. класс должен называться так же как называется файл\папка
1. не должен иметь прямой доступ к доступу к данным с redux store ( не должно быть connect метода в компоненте, данные приходять только из вне )
1. обязательно должны быть прописаны propTypes/defaultProps
1. все компоненты должны наследоваться от PureComponent ( для сокращения кода, что бы не писать, и делать проверки в shpuldComponentUpdate на rerender )

###### Example
```jsx harmony
    import React, { PureComponent } from 'react';
    import PropTypes from 'prop-types';

    export default class NameOfClass extends PureComponent {
      static propTypes = {
        string: PropTypes.string,
        bool: PropTypes.bool,
        object: PropTypes.shape({
          value: PropTypes.string.isRequired,
        }),
        arrayOf: PropTypes.arrayOf([
          PropTypes.number,
          PropTypes.shape({}),
        ])
      }
      static defaultProps = {
        string: '',
        bool: false,
        object: { value: '2' },
        arrayOf: [1, 1, 1],
      }
      render() {
        return (
          <div />
        )
      }
    }
```

###### Контейнеры:
1. Должен наследоваться от PureComponent
1. обязательно должен быть соеденененым с redux
1. обязательно должны быть описаны propTypes/defaltProps
1. класс должен называться как файл\папка
1. желательно использовать bindActionCreator
1. контейнер может использовать внутри себя и другие контейнеры

###### Example
```jsx harmony
    import React, { PureComponent } from 'react';
    import PropTypes from 'prop-types';
    import { connect } from 'react-redux';
    import { bindActionCreators } from 'redux';

    import * as someActions from '../../actions/someActions';

    class NameOfContainer extends PureComponent {
      static propTypes = {
        someStore: PropTypes.shape({
          someValue: PropTypes.array,
        }),
        someActions: PropTypes.shape({
          someAction: PropTypes.func,
        }),
      };
      static defaultProps = {
        someStore: { someValue: [] },
        someActions: { someAction: arg => arg }
      };
      constructor(props) {
        super(props);

        this.state = { defaultValue: 'defaultValue' }
      }

      render() {
        const {
          someStore: { someValue },
          someActions: { someAction }
        } = this.props;
        const { defaultValue } = this.state;
        return (
          <div>
            <SomeComponent {...this.props} />
            <SomeAnotherCompoentn action={someAction} />
          </div>
        )
      }
    }

    export default connect(
      store => ({
        someStore: store.someStore,
      }),
      dispatch => ({
        someActions: bindActionCreators(someActions, dispatch),
      }),
    )(NameOfContainer)

```

###### PropTypes:
1. Должны быть описан каждый компонент\конейнер
1. должны быть описаны только те props которые непосредственно используются в данном классе
1. Детально описывать каждый тип который используется ( не писать PropTypes.object а писать PropTypes.shape({ ... }) )

## Contributing:
#### Tech Lead
* Сергей Семко

#### Менеджмент
* Дмитрий Гудко
* Алексей Кукушкин
* Максим Негода

#### Дизайн
* Николай Волков
* Анастасия Соловьева

#### разработчики
* Эдуард Мордвитский
* Дмитрий Филатов
* Омельян Масалович
* Алексей Билоус
* Андрей Кузьменко

## Acknowledgments:
....

## License:
MIT

## Authors:
[OSSystem](http://ossystem.com.ua)
