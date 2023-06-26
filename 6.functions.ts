/*При объявлении параметров функций мы также можем указать их тип.*/
function func(a:number, b:number){
    return a + b
};

/*Можно также указать тип возвращаемого функцией значения.*/ 
function test(a:number, b:number):number{
    return a + b
}

/*Бывают функции, которые ничего не возвращают. 
В этом случае в качестве результата им указывают ключевое слово void.*/ 
function test2 (elem:HTMLElement, text:string): void{
    elem.textContent = text
}