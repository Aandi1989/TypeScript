// 1.Получение ключей объекта
type Person = {
    name: string;
    age: number;
    address: string;
  };
  
  type PersonKeys = keyof Person;
  
// PersonKeys будет равно "name" | "age" | "address"
//   В этом примере PersonKeys становится объединением всех возможных ключей объекта Person.

//2. Получение типа значения по ключу
type User = {
    name: string;
    age: number;
    address: string;
  };
  
  type PersonKey = keyof User;
  
  // Person[PersonKey] будет равно string | number | string
//   В этом примере Person[PersonKey] дает тип значений по всем ключам объекта Person.

// 3. Использование в функциях
type Student = {
    name: string;
    age: number;
    address: string;
  };
  
  function getProperty(obj: Student, key: keyof Student) {
    return obj[key];
  }
  
  const person: Student = {
    name: "John",
    age: 30,
    address: "123 Main St",
  };
  
  const nameValue = getProperty(person, "name"); // nameValue имеет тип string
//   В этом примере функция getProperty принимает объект Person и ключ, который является типом keyof Person. 
// Это позволяет вам безопасно использовать только существующие ключи объекта.

  
  
  