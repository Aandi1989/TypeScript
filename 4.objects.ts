/*Объекты в TypeScript ведут себя особым образом. При объявлении объектов тип данных не указывается.*/
let user = {name:'john', age:30};

/*TypeScript сам понимает, что в переменной содержится объект и сам контролирует структуру этого объекта, 
предохраняя его от непредусмотренных изменений*/
user = 'eric'; // ошибка

/*TypeScript также контролирует структуру объекта.В момент объявления TypeScript запоминает, 
что в нашем объекте есть ключи name и age, а затем контролирует, чтобы в переменной хранился объект именно с этими ключами.*/
user = {name: 'eric'}; // ошибка
user = {name: 'eric', age: 40, salary: 300}; // ошибка
user = {name: 'eric', age: 40}; // работает

/*Контроль типов значений*/
user.name = 123; // ошибка
user.age = 'eee'; // ошибка
user.age = '30'; // ошибка
user.name='Alex'; // работает