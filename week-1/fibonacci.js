/**
 * Create a JavaScript function that when you inputs a number the function you have created checks whether the number belongs to the Fibonacci sequence or not.
 */
// solve using recursion

 const fibonacci = (query, count = 1, last = 0) => {
    if(count < query){
        // console.log(query);
        console.log(count);
        console.log(last);
       return fibonacci(query, count+last, count);

    };

    if(count === query){
       return true;
    }
    return false;
 };

console.log(fibonacci(3));

