Variables are named containers that store data. Variables can be declared with the keyword var. 

    var name;//declare variable name

The variable above is declared but has not been assigned a value. Therefore, it is undefined.

    console.log(name)//=> undefined

Variables are then initialized when they are set to equal a value using the assignment operator.

    name = 'Jackie';//assign the value of name to Jackie

Variables declared with the keyword var, or the keyword let, are reassignable. This means that they can be assigned to a
diffrent value after being assign to some intial value. 
    
    name = 'John'; // reassign name variable to the value of John
    console.log(name); //=> 'John'

    let animal = 'cat'; //declare a variable animal with let keyword and assign it the value of cat
    animal = 'dog'; //reassign the animal variable to dog
    console.log(animal); // => 'dog'

Another type of variable in Javascript is a contstant. Constants are declared with the keyword const.

    const color = 'blue'; //declare a constant color and assign it the value of blue

Constants are not reassignable. This means that they cannot be assigned to a new value after they first assigned an initial
one. 
    color = 'red'//attempt to reassign the constant color =>TypeError: Assignment to contsant variable

Another feature differentiating const is that it must be initialized when it is declared. Var and let can be declared,
and not assigned a value. When const is declared, it must simultaneously be assigned a value. Declaring a constant without
assigning it a value will result in a syntax error.

    const color; //=> SyntaxError: Missing initializer in const declaration

There are other differences between these three types of variables. One such importance difference is the ways that they
are hoisted and scoped. Hoisting allows a variable to be used before it is declared. 

    food = 'donut'; //assign food variable value of donut
    console.log(food); //=> donut
    var food; //declare food variable with keyword var

In the above example, assigning food the value of donut and logging it to the console will return donut. This works because
the var keyword variables are hoisted to the top. This means that, when a code runs, all var keyword variables are pulled 
up to the top of the code. Therefore, it does not matter where in the code they are declared. 

However, when var variables are hoisted, it is only their declaration that is pulled to the top. The value assignment is
not also hoisted. 

    console.log(plant); //print the variable plant, which is yet to be declared and assigned, to the console
    var plant = 'fern'; //declare plant variable and assign it value of fern
    //=> undefined

In the above example, the declaration of plant is hoisted to the top. Therefore, when printed to the console, the computer
can recognize that plant is a variable. However, the value assignment is not also hoisted. Therefore, the console will 
print 'undefined', as the variable is yet to have been defined. 

This is opposed to a reference error. If there was no plant variable at all, the console would return a reference error. 

    console.log(insect); // => ReferenceError: insect is not defined

The above is an example of what happens when a variable is not declared at all. This is of note: the same error will also 
appear if a non-hoisted variable is used before it is declared. 

    console.log(clothes); //log clothes before it is declared and assigned a value
    let clothes = 'shirt';//=> ReferenceError: Cannot access clothes before initialization at object. 

The keywords let and const declare variables that are not hoisted to the top. The computer processes them in the order of
wherever they are within the code. If they are used or referenced before they are declared, the console will return a
reference error. This is because the computer has not yet received this information, and so it is as if they have not
been declared at all. 

These variables also differ in the ways that they are scoped. All three types, var, let and const, are scoped to functions. 
This means that, if they are declared within a function 




