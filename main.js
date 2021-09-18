const date = require('./date');

function foo() {
    const dt = date.bar('hh:mm DD/MM/YY');
    // date.bar
    console.log('---------------11111');
    console.log(dt, date.b);
}

foo();