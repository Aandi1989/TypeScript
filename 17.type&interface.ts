/*В TypeScript существует два основных способа определения пользовательских типов: через ключевые слова `type` и `interface`. 
Оба подхода позволяют создавать пользовательские типы данных, но есть некоторые различия в их функциональности и использовании. 
Вот основные различия между `type` и `interface` в TypeScript:
1. Синтаксис:
   - `type` используется с ключевым словом `type` для определения пользовательского типа.
    Например: `type MyType = { prop: string };`
   - `interface` используется с ключевым словом `interface` для определения пользовательского типа. 
   Например: `interface MyInterface { prop: string; }`
2. Расширение:
   - `type` позволяет создавать объединения (union), пересечения (intersection) и алиасы типов. 
   Он также поддерживает использование универсальных параметров (generics). Например: `type MyType = TypeA | TypeB;`
   - `interface` позволяет объявлять только структуру объекта и не поддерживает объединения, пересечения и универсальные параметры.
3. Расширение существующих типов:
   - `type` позволяет расширять существующие типы с помощью оператора `&` (пересечение). 
   Например: `type ExtendedType = BaseType & { additionalProp: number };`
   - `interface` позволяет объединять интерфейсы с помощью ключевого слова `extends`. 
   Например: `interface ExtendedInterface extends BaseInterface { additionalProp: number; }`
4. Использование в объектах:
   - `type` и `interface` могут быть использованы для определения структуры объектов и их свойств. 
   Однако при использовании `type` можно определить и расширить типы, в то время как `interface` 
   обычно используется только для определения структуры объекта.
5. Расширение классов:
   - Только `interface` может расширять классы (class) в TypeScript. Например: `interface MyInterface extends SomeClass { }`

Оба подхода имеют свои преимущества и часто используются в зависимости от конкретных потребностей. 
В общем случае, если вам нужно определить только структуру объекта, `interface` является более распространенным выбором. 
Если вам нужно определить объединения, пересечения или использовать алиасы типов, `type` предоставляет более гибкую функциональность.*/ 