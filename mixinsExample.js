
/*
 Create Mixins classes:
 a. Eats
 b. Plays
 c. Codes
 Then create a class which implements these and uses their behavior.
 */
var Eats = (function () {
    function Eats() {
    }
    Eats.prototype.taste = function () {
        console.log("Doesn't this cake taste yummy?!!");
    };
    return Eats;
}());
var Plays = (function () {
    function Plays() {
    }
    Plays.prototype.climb = function () {
        console.log("I love rock climbing!!");
    };
    return Plays;
}());
var Codes = (function () {
    function Codes() {
    }
    Codes.prototype.test = function () {
        console.log("I hate unit testing!!");
    };
    return Codes;
}());
var DreamGuy = (function () {
    function DreamGuy() {
    }
    return DreamGuy;
}());
applyMixins(DreamGuy, [Eats, Plays, Codes]);

function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}

var hunk = new DreamGuy();
hunk.taste();
hunk.climb();
hunk.test();
