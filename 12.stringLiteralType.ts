/*С помощью оператора объединения типов можно объединять не только встроенные типы, но и строки*/ 
let str: 'success' | 'error';
str = 'success';
str = 'error';
str = 'eee'; // ошибка 

/*Для объединения строк можно ввести свой тип*/
type message = 'success' | 'error';
let str2: message;
str = 'success';