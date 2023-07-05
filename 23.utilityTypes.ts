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
   
