/*
 Create a class decorator, name it as MyClassDecorator and define target
 function and display message once; called with MyClassDecoratorExercise for:
 a. No parameter class decorator
 b. Parameter class decorator
 */

function MyClassDecorator(
    target: Function // The class the decorator is declared on
) {
    console.log("MyClassDecorator called on: ", target);
}

function MyClassDecoratorParams(param1?: number, param2?: string) {
    return function(
        target: Function // The class the decorator is declared on
    ) {
        console.log("MyClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@MyClassDecoratorParams(1, "a")
@MyClassDecoratorParams()
@MyClassDecorator
class MyClassDecoratorExercise{
    public firstName: string
    public lastName: string

    constructor(fname : string, lname : string) {
        this.firstName = fname
        this.lastName = lname
    }
}

var me = new MyClassDecoratorExercise("Maddie", "Reddy")
console.log(`Name: ${me.firstName} ${me.lastName}`);