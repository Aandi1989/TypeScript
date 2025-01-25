let arr: string[] = ['a', 'b', 'c', 'd', 'e'];  // arrays
let arr2: Array<number> = [1, 2, 3, 4, 5];


type Dictionary = {                         // objects
    [key: string]: string;
};

const translations: Dictionary = {
    hello: "Hola",
    goodbye: "Adiós",
};


interface Vehicle {
    make: string;
    model: string;
}

interface Car extends Vehicle {       // extending objects
    doors: number;
}

type Car = Vehicle & {             //   using intersections with types
    doors: number;
};

const myCar: Car = { make: "Toyota", model: "Camry", doors: 4 };


type ApiResponse<T> = {           // using generics with objects
    data: T;
    status: number;
};

const response: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "John" },
    status: 200,
};

enum Season {                      // enums
    Winter = 'Зима',
    Spring = 'Весна',
    Summer = 'Лето',
    Autumn = 'Осень'
};

function greet(): string {          // ReturnType
    return "Hello";
}

type GreetingReturnType = ReturnType<typeof greet>;

function identity<T>(value: T): T {
    return value;
}

type IdentityReturnType = ReturnType<typeof identity<number>>;


// keyof
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


//Generics
function wrapInArray<T>(value: T) {
    return [value];
}

let numbers = wrapInArray(1);

// generics interfaces
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null };
}

interface Product {
    title: string;
}

let result = fetch<Product>('url');
result.data?.title;

// utilityTypes
/*Partial<Type>
Constructs a type with all properties of Type set to optional. 
This utility will return a type that represents all subsets of a given type.
Example*/ 
interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });



/*Required<Type>
Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
Example*/
interface Props {
    a?: number;
    b?: string;
  }
   
  const obj: Props = { a: 5 };
   
  const obj2: Required<Props> = { a: 5 };
//  Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.


/*Readonly<Type>
Constructs a type with all properties of Type set to readonly, 
meaning the properties of the constructed type cannot be reassigned.
Example*/   
interface Tobe {
    title: string;
  }
   
  const tobe: Readonly<Tobe> = {
    title: "Delete inactive users",
  };
   
  tobe.title = "Hello";
// Cannot assign to 'title' because it is a read-only property.


/*Record<Keys, Type>
Constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.
Example*/
interface CatInfo {
    age: number;
    breed: string;
  }
   
  type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };

/*Pick<Type, Keys>
Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
Example*/ 
interface ToBuy {
    title: string;
    description: string;
    completed: boolean;
  }
   
  type TodoPreview = Pick<ToBuy, "title" | "completed">;
   
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  }; 
  
/*Omit<Type, Keys>
Constructs a type by picking all properties from Type and then
removing Keys (string literal or union of string literals). The opposite of Pick.
Example*/   
interface Togo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TogoPreview = Omit<Togo, "description">;
   
  const togo: TogoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };


  type TogoInfo = Omit<Togo, "completed" | "createdAt">;
 
  const togoInfo: TogoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  }; 