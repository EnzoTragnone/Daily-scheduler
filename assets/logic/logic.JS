//arrays
tasks = [];
user = "";
time = [];
//load data from memory
114

//check date and time
setInterval(function () {
    let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
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

//check for tasks date adn time
$(".timeBlock").each(setInterval(function () {
    let hour = moment().format("H:ss");
    if ($(".this > .timeBox > p").text() > hour) {
        console.log($(".this > .timeBox > p").text())
    } else {
        console.log($(".this > .timeBox > p").text())
    }
}, 1000))

$("div").each(setInterval(function () {
    let hour = moment().format("H:ss");
    if ($("p").text() > hour) {
        console.log($(".hour").text())
    } else {
        console.log($(".hour").text())
    }
}, 1000))
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

