/*Объекты могут иметь внутри себя структуру любой вложенности 
и эта структура может быть описана при объявлении объекта или в интерфейсе.
Cделаем вот такой интерфейс, описывающий юзера:*/ 
interface User {
	name: string,
	age: number,
	parents: {
		mother: string,
		father: string
	}
}
/*Сделаем объект, реализующий этот интерфейс:*/ 
let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: 'jane',
		father: 'eric'
	}
}