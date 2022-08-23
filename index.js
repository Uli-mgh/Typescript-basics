console.log("hello typescript");
// implicit types
var helloworld = "hello world";
// Explicit types
var firstName = "jhon";
var age = 30;
var x = ["hello", 10];
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["America"] = 0] = "America";
    Continents[Continents["Africa"] = 1] = "Africa";
    Continents[Continents["Asia"] = 2] = "Asia";
    Continents[Continents["Europa"] = 3] = "Europa";
    Continents[Continents["Oceania"] = 4] = "Oceania";
})(Continents || (Continents = {}));
// Usage
var region = Continents.Africa;
