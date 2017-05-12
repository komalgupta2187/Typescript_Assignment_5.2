
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Create a class decorator, name it as MyClassDecorator and define target
 function and display message once; called with MyClassDecoratorExercise for:
 a. No parameter class decorator
 b. Parameter class decorator
 */
function MyClassDecorator(target // The class the decorator is declared on
    ) {
    console.log("MyClassDecorator called on: ", target);
}
function MyClassDecoratorParams(param1, param2) {
    return function (target // The class the decorator is declared on
        ) {
        console.log("MyClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
var MyClassDecoratorExercise = (function () {
    function MyClassDecoratorExercise(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    MyClassDecoratorExercise = __decorate([
        MyClassDecoratorParams(1, "a"),
        MyClassDecoratorParams(),
        MyClassDecorator
    ], MyClassDecoratorExercise);
    return MyClassDecoratorExercise;
}());
var me = new MyClassDecoratorExercise("Maddie", "Reddy");
console.log("Name: " + me.firstName + " " + me.lastName);
