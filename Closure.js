// demonstrating closure: Closures are statfull functions which means it holds a state of the function run
function simpleFunction() {
    var x = 0;
    x++;
    console.log(x);
}

function closureFunction() {
    var y = 0;
    function increment() {
        y++;
        console.log(y);
    }
    return { increment }
}

simpleFunction();
simpleFunction()
var closureRef = closureFunction();
closureRef.increment();
// state is maintained for the variable y
closureRef.increment();
closureRef.increment();
closureRef.increment();
closureRef.increment();
