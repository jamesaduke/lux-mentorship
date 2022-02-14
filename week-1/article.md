What is JavaScript- This is an object-oriented scripting language used to make web pages interactive.
The JavaSript of today goes beyond this definition. JavaScript now has been made to perform most sectors of technology from mobile applications to serverside applications and even desktops applications in some cases. It is indeed very dynamic.
To understand any programming language there are some important building blocks that one has to learn.

Here are some of the important building blocks, in my opinion, that is key to navigating your way through modern JavaScript.

## Number

These are just numeric values as you might have guessed.

```
1 2 3
```
They use a fixed 64-bit double-precision format to represent it in Memory. This means they are limited in what they could represent. The computer could not read this as a number.

```
1.5
```
To convert this to a number you would use the method

```
Math.floor(1.5)
// returns 1
```
 The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) is supported by this data type, addition, subtraction, multiplication, division.


## Strings

Strings are used to represent text in JavaScript.

```
`Hey`
"Hey Now"
'Hey now now'
```

Strings are a sequence of [Unicode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#unicode) characters.

## Variables

To declare variables in JavaScript you use one of the following keywords **let**, **var **or **const**.

```let``` allows you to declare block-level variables. This means the variable is available within the block in which it is declared.

```
let j;
let name = "James";
```

```Let``` declared within a scope

```
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```
```const```  allows you to declare variables that will not change. The variable is accessible from the block in which it is declared.

```
const Pi = 3.142; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
Add this to your knowledge.
```
```var``` This is the more commonly known variable declaration in JavaScript. This declaration is free from the restrictions of **let** and **const**. ```var``` is available within the function within which it is declared.


```
// myVarVariable *is* visible out here

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable is visible to the whole function
}

// myVarVariable *is* visible out here
```

## Operators
JavaScript has various types of operators:

#### Numeric operators
These operators include ```+, -, *, / ``` and ``` %```(this returns the remainder in a division).
You can use ```++``` and ```--``` to increment and decrement respectively. They can be used as a prefix or postfix operators. The ```+``` can also be used to concatenate strings.

```
'hello' + ' world'; // "hello world"
```
When you add a string to a number, the number is immediately converted to a string.
```
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"

```
When you add an empty string you can convert a string to a number.

#### Comparison Operators
Comparisons are made using the following ```<, >, <=, >=```. When these operations are used they return either ``` true``` or ```false```.
```
1 > 2; // false
2 > 1; // true
```

## Objects
An object is a collection of key-value pairs. Objects can be declared in the following ways.

```
var myObj = new Object();
```
or

```
var myObj = {};
```

The second method is referred to as literal syntax.  You can initialize an object to its entirety using the literal syntax method.

```
var obj = {
  name: 'Carrot',
  level: 'Max',
    size: 12
  }
};
```
The values ```name, _for```, the values to the left of each item in the object are what we refer to as **key**. We use the key to access their corresponding value. Example,

```
obj.name; // 'Carrot'

```
You could also see the ```obj``` has a nested object within it, ```details```. To access a value from the nested object we would use this notation.

```
obj.details.color; // orange
//or
obj['details']['size']; // 12
```

## Functions
This is the most important component of JavaScript.
```
function sum(x, y) {
  return x + y;
}
add(3,5); // returns 7
```
This is the most basic function. This function takes parameters ```x`` and ```y``` and returns the result of their summation. Functions can also be defined without arguments.
```
function add() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum;
}

add(3,4,2); //9
```
This works because functions have a default **arguments** parameter. This is an array-like parameter that can take multiple parameters.


#### Anonymous functions
You could also create functions without names that are referred to as **anonymous functions**.
```
// Note that there's no function name before the parentheses
let avg = function() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
};

```
Using the variable name ```avg``` to call the function, ```avg()```.


This is not an exhaustive introduction, but these are some of the more important attributes of JavaScript that one should know in my opinion.
I would be adding more to this article as I learn more about JavaScript




















