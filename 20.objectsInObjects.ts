/*Объекты могут содержать в себе другие объекты, описывающиеся отдельными интерфейсами.
Пусть у нас есть интерфейс Period, описывающий объект, хранящий в себе две даты встроенного в JavaScript класса Date:*/ 
interface Period {
	date1: Date,
	date2: Date
};
/*Создадим объект с периодом:*/ 
let period: Period = {
	date1: new Date(2030, 11, 31),
	date2: new Date(2020, 11, 31)
};


/*Пусть у нас есть интерфейс, описывающий объект с городом:*/ 
interface City {
	name: string
}
/*Сделаем также интерфейс, описывающий юзера. При этом у юзера будет имя, возраст и город, в свою являющийся объектом:*/ 
interface User {
	name: string,
	age: number,
	city: City
}
/*Cоздадим объект с юзером:*/ 
let city: City = {name: 'london'};
let user: User = {name: 'john', age: 30, city: city};
/*Не обязательно для города создавать отдельную переменную:*/ 
let user2: User = {
	name: 'john',
	age: 30,
	city: {name: 'london'}
};