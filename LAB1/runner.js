import
{
    add1, add2, add3, add4
} from "./calculator.js";

const age = 100;
let myAge = 99;
// age = 101; mamy już zadeklarowane "age" jako stałą - const

const myName = "Kamil";
let czyPadaDeszcz = false;

console.log(age, myAge);
console.log("Moje imię to:", myName);
console.log("Zmienna booleanowa 'czyPadaDeszcz' posiada wartość:", czyPadaDeszcz);

// a) 5 stałych liczbowych całkowitych
const liczba1 = 100;
const liczba2 = 101;
const liczba3 = 102;
const liczba4 = 103;
const liczba5 = 104;

// b) 5 stałych zmiennoprzecinkowych
const float1 = 0.5;
const float2 = 0.75;
const float3 = 1.25;
const float4 = 2.5;
const float5 = 3.14;

// c) 5 stałych string (imiona)
const imie1 = "Kamil";
const imie2 = "Kamil";
const imie3 = "Kamil";
const imie4 = "Kamil";
const imie5 = "Kamil";

// d) 5 stałych boolean
const bool1 = true;
const bool2 = false;
const bool3 = true;
const bool4 = false;
const bool5 = true;

// e) 5 zmiennych undefined
let zmienna1 = undefined;
let zmienna2 = undefined;
let zmienna3 = undefined;
let zmienna4 = undefined;
let zmienna5 = undefined;

// f) Wypisanie wszystkiego w konsoli
console.log(liczba1, liczba2, liczba3, liczba4, liczba5);
console.log(float1, float2, float3, float4, float5);
console.log(imie1, imie2, imie3, imie4, imie5);
console.log(bool1, bool2, bool3, bool4, bool5);
console.log(zmienna1, zmienna2, zmienna3, zmienna4, zmienna5);

console.log(myName === "Kamil");
console.log(myName === "Ania");

const human1 = 
{
    age: 22,
    name: "Kamil",
};

const human2 = 
{
    age: 20,
    name: "Adam",
};

console.log(human1, human2);
console.log(human1 === human2);