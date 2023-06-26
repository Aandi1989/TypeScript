/*В TypeScript при объявлении переменной мы обязаны указать ее тип. 
Для этого после имени переменной мы должны написать двоеточие, а затем указать желаемый тип.*/
let test: string = 'abc';
let test2: number = 123;
let test3: boolean = true;

/*Не обязательно задавать значение переменной сразу при ее объявлении.
 Можно сначала объявить переменную, а затем ниже в коде присвоить ей значение.*/
let test4:string;
test4 = 'def';

/*В строковую переменную мы можем записать другое строковое значение,
но при попытке записать туда число TypeScript выдаст ошибку, т.к. мы пытаемся сменить тип переменной*/
let test5: string = 'ghj';
test5 = 'klm';
test5 = 789;