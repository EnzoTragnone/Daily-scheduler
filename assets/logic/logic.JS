//arrays
tasks = [];
user = "";
time = [];

//load data from memory

//check date and time
setInterval(function () {
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $(dateInfo).html(now)
}, 1000)

//check for name
if ("user" in localStorage) {
    user = localStorage.getItem("user");
    $("h2").html("Welcome back " + user);
}
else {
    user = prompt("What is your name?");
    console.log(user);
    $("h2").html("Welcome " + user);
    localStorage.setItem("user", user);
}

//check for tasks date

//display tasks, name and date time and color change

//nav bar quick with expand

//outer buttons


//expand

//buttons/input/save/time

//collapse

//save to memory

// button up
$(scroll).click(function () {
    $(window).scrollTop(0);
})

