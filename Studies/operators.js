/*
Operators act on data and are grouped by the type of action they perform. 

Operators may be any of the following types: 
-Arithemtic opertators
-Assignment operators
-Comparison operators
-Logical Operators
-Type Operators

Arithmetic operators perform arithmetic on numbers. 
The + operator adds the operands on either side.
    2+1 //=> 3
The - operator subtracts the operand on the right from the operand on the left.
    2-1 //=> 1
The * operator multiplies the two operands.
    2*3 //=> 6
The ** operator exponentiates the operand on the left by the operand on the right.
    2**3 //=> 8
The / operator divides the operand on the left by the operand on the right.
    4/2 //=> 2
The % operator returns the number remaining after the left operand is divided by the right operand.
    7%2 //=> 1
The ++ operator increments a value by 1. 
    1++ //=> 2
The -- operator decrements a value by 1. 
    1-- //=> 0

Assignment operators assign or reassign a variable to a value.
The = operator sets the operand on the left to the operand on the right.
    x = 2
The += operator adds the operand on the right to the operand on the left and assigns this new value to the left operand.
    x +=3; //=> x = x + 3
The -= operator subtracts the operand on the right from the one on the left and reassigns the left to this new value.
    x -=3; //=> x = x - 3
The *= operator multiplies the two operands and assigns the left operand to this new vaue.
    x *=3; //=> x = x * 3
The /= operator divides the left operand by the right one and assigns this new value to the left operand.
    x /=3; //=> x = x / 3
The %= operator gives the remainder of the left operand divided by the right and assigns this value to the left operand.
    x %= 2; //=> x = x % 2
The **= operator exponentiates the left operand by the right operand and assigns this value to the left operand.
    x **= 2; //=> x = x ** 2

Comparison operators return a boolean based on assertions about two values. 
The == operator compares the value of the operands and returns true if the values of both are equal, regardless of data type.
    2 == '2' //=> true
The === operator compares the values and date types of either operand and returns true if they are equal.
    2 === 2 //=> true
The != operator compares the operands and returns true if they are not equal values, regardless of datatype.
    2 != '3' //=> true
The !== operator compares the operands and returns true if they are not the same value OR not the same datatype.
    2 !== '2' //=> true
The > operator returns true if the left operand is greater than the right.
    3 > 2 //=> true
The < operator returns true if the left operand is less than the right.
    2 < 3 //=> true
The >= operator returns true if the left operand is greater than or equal to the right.
    3 >= 3 //=> true
The <= operator returns true if the left operand is less than or equal to the right. 
    2 <= 2 //=> true
The ? operator is used with three operands. First, a value that resolves to true or false. Then, if the condition is
true, the operand to the immediate right of the operator is exectued. If the first value resolves to false, then the value
on the far right, on the other side of a colon, is executed. 
    true ? 1: 2 //=> 1
    false ? 1: 2 //=> 2

Logical operators are used to determine logic between values. They are used in 'if' conditions.
The && operator only resolves to true if both the right and left expressions on either side of it resolve to true.
    (2 > 1 && 3 > 2) //=> true
The || operator resolves to true if either the right or left expression on either side of it resolve to true.
    (3 > 2 || 2 > 1) //=> true 
The ! operator flips the boolean of a value. 
    !true //=> false
    !false //=> true

Type operators return the type of a value: 'typeof' will return a values type.
    typeof 'cat' //=> string
    typeof 6 //=> number
    typeof true //=> boolean
And 'instanceof' is used to test objects created from factory functions; they return true if the value on the left is an
instance of using the factory function called on the right.
    function makeAnimal(name, color, species) {
        this.name = name,
        this.color = color,
        this.species = species
    };

    let landon = makeAnimal('Landon', 'brown', 'cat');

    landon instanseof cat; //=> true
