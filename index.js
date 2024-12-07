let clock = document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

// to show the current time whenever we open this project 
//we will use setInterval method

// format of setInterval => function, time in miliseconds
// setInterval(function(){}, 1000)

setInterval(function(){
    let date = new Date()
    // clock.innerHTML = date.toLocaleTimeString()
    clock.innerHTML = date.toLocaleString()
}, 1000)

